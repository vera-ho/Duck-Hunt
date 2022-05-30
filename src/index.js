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
    setTimeout(()=> {       // Future: use start on click listener
        game.start();
    }, 10);  // make sure sprite is loaded before starting game

    foreground.canvas.addEventListener("click", (e) => {
        huntEventListener(e, foreground, game);
    })
})

// Player clicked on canvas to hunt
function huntEventListener(e, foreground, game) {
    // get mouse click position
    let bound = foreground.canvas.getBoundingClientRect();
    let hit_x = e.clientX - bound.left;
    let hit_y = e.clientY - bound.top;

    for(let i = 0; i < game.duckArray.length; i++) {
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

        if(hit_x < xUpBound && hit_x > xLowBound && 
           hit_y < yUpBound && hit_y > yLowBound) { //sucessful hunt
            // stop flying animation
            console.log("Hit!")
            duck.flying = false;
            game.duckArray = game.duckArray.filter( (ele, idx) => { 
                return i !== idx;
            });
            
            // run successful hunt animation
            


            break;
        } else { // failed hunt
            // decrease shot counter
            console.log("Miss! Haha.")

            // animate laughing dog
        }
    }
}

