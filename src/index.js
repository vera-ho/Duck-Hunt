import Canvas from "./scripts/canvas";
import Game from "./scripts/game";
import GameAudio from "./scripts/gameaudio";

const foregroundPath = "./assets/duckhunt_transparent_nicepng.png";

export const DIMX = 800;
export const DIMY = 528;

document.addEventListener("DOMContentLoaded", () => {
    // Canvas Setup
    const background = new Canvas("canvas-background", DIMX, DIMY);        
    const gameboard = new Canvas("canvas-gameboard", DIMX, DIMY);
    const foreground = new Canvas("canvas-foreground", DIMX, DIMY);

    background.setColor("skyblue");
    foreground.setImage(foregroundPath);

    // Game
    let game = new Game(gameboard, foreground);
    splashImage(foreground, gameboard, game);
})

//********************   Listeners   ********************//
function splashImage(foreground, gameboard, game) {
    let splashEl = document.getElementById("splash-container");
    document.addEventListener("click", () => {
        let fadeSplash = setInterval(() => {
            if(!splashEl.style.opacity) splashEl.style.opacity = 1;
            if(splashEl.style.opacity > 0) {
                splashEl.style.opacity -= 0.1;
            } else {
                splashEl.remove();
                clearInterval(fadeSplash);
                playButtonListener(foreground, gameboard, game);
            }
        }, 100)
    }, { once: true })
}

function playButtonListener(foreground, gameboard, game) {
    let playButton = document.getElementById("play-button");
    playButton.addEventListener("click", () => {
        game.start();
        playButton.style.display = "none";
        huntEventListener(foreground, game);
        pauseButtonListener(game);
        restartButtonListener(foreground, gameboard, game);
    }, { once: true });
}

function huntEventListener(foreground, game) {
    foreground.canvas.addEventListener("click", (e) => {
        let sound = new GameAudio();
        sound.shoot.play();
        if(game.animating && !game.dogIntro) huntEvent(e, foreground, game);
    })
}

function pauseButtonListener(game) {
    let pauseButton = document.getElementById("pause-button") 
    pauseButton.addEventListener("click", () => {
        if(pauseButton.innerHTML === "Pause" && game.animating) {
            game.pause();
            pauseButton.innerHTML = "Resume";
        } else {
            pauseButton.innerHTML = "Pause";
            game.resume();
        }
    })
}

function restartButtonListener(foreground, gameboard, game) {
    let restartButton = document.getElementById("restart-button");

    restartButton.addEventListener("click", (e) => {
        game.stop();
        game.message.style.zIndex = "0";
        restart(foreground, gameboard, game);
        let playButton = document.getElementById("play-button");
        playButton.style.display = "block";
    })
}

function restart(foreground, gameboard, game) {
    foreground.canvas.removeEventListener("click", (e) => {  // not working
        huntEvent(e, foreground, game);
    })
    game.counterEl.style.zIndex = "0";
    gameboard.clear();
    game.restart();
    game = new Game(gameboard, foreground);
    playButtonListener(foreground, gameboard, game);
}

// Player clicked on canvas to hunt
function huntEvent(e, foreground, game) {

    // Get click position
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

        // Adjust for reversed image (duck flying left)
        if(duck.vel[0] < 0) {
            xUpBound = duck.pos[0];
            xLowBound = duck.pos[0] - duck.imgSize;
        }

         //successful hunt
        if(hit_x < xUpBound && hit_x > xLowBound && 
           hit_y < yUpBound && hit_y > yLowBound) {

            // Stop flying animation
            console.log("Hit!")
            duck.vel = [0, 0];
            duck.flying = false;
            game.score++; 
            game.hit = true;
            break;

        } else { // failed hunt
            // decrease shot counter
            // console.log("Miss! Haha.")

            // animate laughing dog

        }
    }

    if(!game.hit && game.ammo > 0 && game.animating) {
        console.log("Miss! Haha.")
        game.ammo--;
    } 
}