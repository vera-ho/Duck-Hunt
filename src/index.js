import Canvas from "./scripts/canvas";
import Duck from "./scripts/duck";
import Game from "./scripts/game";

// Load assets to environment
const foregroundPath = "./assets/duckhunt_transparent_nicepng.png";
const spritePath = "./assets/duckhunt_various_sheet.png";

export const DIMX = 800;
export const DIMY = 528;

document.addEventListener("DOMContentLoaded", () => {
    // Canvas Setup
    const background = new Canvas("canvas-background", DIMX, DIMY);        
    const gameboard = new Canvas("canvas-gameboard", DIMX, DIMY);
    const foreground = new Canvas("canvas-foreground", DIMX, DIMY);

    background.setColor("skyblue");
    foreground.setImage(foregroundPath);
    
    // Duck Testing - Animation with Sprite
    let game = new Game();
    let sprite = new Image();
    sprite.src = spritePath;
    sprite.onload = function() {
        // animate(gameboard);
        let duck1 = new Duck({
            duckType: "green",
            pos: [400, 200],
            vel: [10, -10], 
            game: game
        });

        let duck2 = new Duck({
            duckType: "green",
            pos: [600, 100],
            vel: [-10, -10],
            game: game, 
            frameRate: 60
        });

        duck1.animate(gameboard.ctx, sprite);
        duck2.animate(gameboard.ctx, sprite);

    }
})