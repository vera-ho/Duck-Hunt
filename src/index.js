import Canvas from "./scripts/canvas";
import Duck from "./scripts/duck";

// Load assets to environment
const foregroundPath = "./assets/duckhunt_transparent_nicepng.png";
const spritePath = "./assets/duckhunt_various_sheet.png";

const DIMX = 800;
const DIMY = 528;

document.addEventListener("DOMContentLoaded", () => {
    // Canvas Setup
    const background = new Canvas("canvas-background", DIMX, DIMY);        
    const gameboard = new Canvas("canvas-gameboard", DIMX, DIMY);
    const foreground = new Canvas("canvas-foreground", DIMX, DIMY);

    background.setColor("skyblue");
    foreground.setImage(foregroundPath);
    
    // Duck Testing - Animation with Sprite
    let ducks = new Image();
    ducks.src = spritePath;
    ducks.onload = function() {
        // animate(gameboard);
        let duck1 = new Duck({
            duckType: "green",
            pos: [400, 200],
            vel: [10, -10],
            imgSize: 65
        });

        let duck2 = new Duck({
            duckType: "green",
            pos: [600, 100],
            vel: [-10, -10],
            imgSize: 65
        });

        // let duck3 = new Duck({
        //     duckType: "green",
        //     pos: Duck.randomPosition(),
        //     vel: [-10, 10],
        //     imgSize: 65
        // });

        duck1.animate(gameboard, ducks);
        duck2.animate(gameboard, ducks);
        // duck3.animate(gameboard, ducks);







    }
})