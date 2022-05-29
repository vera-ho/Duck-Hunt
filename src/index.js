import Canvas from "./scripts/canvas";
import Game from "./scripts/game";
// import Duck from "./scripts/duck";

// Load assets to environment
const foregroundPath = "./assets/duckhunt_transparent_nicepng.png";
// const spritePath = "./assets/duckhunt_various_sheet.png";

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
    let game = new Game(gameboard);
    setTimeout(()=> {
        console.log("timeout")
        game.startGame();
    }, 1000);

    foreground.canvas.addEventListener("click", (e) => {
        // alert("HI");
        console.log(e);
        let bound = foreground.canvas.getBoundingClientRect();
        console.log("bounding: " + bound);
        let x = e.clientX - bound.left;
        let y = e.clientY - bound.top;
        console.log("Bouncing click x and y: " + x + " and " + y);
        console.log("Duck X box: " + (game.duckArray[0].pos[0] - 65/2) + " and " + (game.duckArray[0].pos[0] + 65/2))
        console.log("Duck Y box: " + (game.duckArray[0].pos[1] - 65/2) + " and " + (game.duckArray[0].pos[1] + 65/2))
        
        // draw hitbox and duck box

        foreground.ctx.beginPath();
        foreground.ctx.rect(x-32, y - 32,65 , 65);
        foreground.ctx.strokeStyle = "red";
        foreground.ctx.stroke();

        if(game.duckArray[0].vel[0] < 0) {
            // debugger
            foreground.ctx.beginPath();
            foreground.ctx.rect(game.duckArray[0].pos[0] - 65, game.duckArray[0].pos[1], 65, 65);
            foreground.ctx.strokeStyle = "yellow";
            foreground.ctx.stroke();
        } else {
            foreground.ctx.beginPath();
            foreground.ctx.rect(game.duckArray[0].pos[0], game.duckArray[0].pos[1], 65, 65);
            foreground.ctx.strokeStyle = "yellow";
            foreground.ctx.stroke();
        }

        debugger
    })
})