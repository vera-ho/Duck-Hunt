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
    
    let game = new Game(gameboard, foreground);

    playButtonListener(foreground, game);
    restartButtonListener(foreground, gameboard, game);
})

// Controls Listeners
function playButtonListener(foreground, game) {
    let playButton = document.getElementById("play-button");
    playButton.addEventListener("click", () => {
        game.start();
        huntEventListener(foreground, game);
    }, { once: true });
}

function huntEventListener(foreground, game) {
    foreground.canvas.addEventListener("click", function foo(e) {
        huntEvent(e, foreground, game);
    })
}

function restartButtonListener(foreground, gameboard, game) {
    let restartButton = document.getElementById("restart-button");

    restartButton.addEventListener("click", (e) => {
        restart(foreground, gameboard, game);
    })
}

function restart(foreground, gameboard, game) {
    foreground.canvas.removeEventListener("click", function foo(e) {
        huntEvent(e, foreground, game);
    })
    game.duckArray = [];
    game = null;

    alert("restart!");

    game = new Game(gameboard, foreground);
    playButtonListener(foreground, game);
    // huntEventListener(foreground, game);
}

// Player clicked on canvas to hunt
function huntEvent(e, foreground, game) {
    // Get click position
    let bound = foreground.canvas.getBoundingClientRect();
    let hit_x = e.clientX - bound.left;
    let hit_y = e.clientY - bound.top;

    for(let i = 0; i < game.duckArray.length; i++) {  // change back to forEach?
        let duck = game.duckArray[i];

        // Set hit box
        let xUpBound = duck.pos[0] + duck.imgSize;
        let yUpBound = duck.pos[1] + duck.imgSize;
        let xLowBound = duck.pos[0];
        let yLowBound = duck.pos[1];

        if(duck.vel[0] < 0) {
            xUpBound = duck.pos[0];
            xLowBound = duck.pos[0] - duck.imgSize;
        }

         //successful hunt
        if(hit_x < xUpBound && hit_x > xLowBound && 
           hit_y < yUpBound && hit_y > yLowBound) {

            // stop flying animation
            console.log("Hit!")
            duck.vel = [0, 0];
            duck.flying = false;

            // update game
            game.score++;

        } else { // failed hunt
            // decrease shot counter
            console.log("Miss! Haha.")
            // game.ammo--;

            // animate laughing dog

        }
    }
}

