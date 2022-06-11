import Canvas from "./scripts/canvas";
import Game from "./scripts/game";
import GameAudio from "./scripts/gameaudio";
import GameView from "./scripts/gameview";

const foregroundPath = "./assets/duckhunt_transparent_nicepng.png";

export const DIMX = 800;
export const DIMY = 528;

document.addEventListener("DOMContentLoaded", () => {
    const background = new Canvas("canvas-background", DIMX, DIMY);        
    const gameboard = new Canvas("canvas-gameboard", DIMX, DIMY);
    const foreground = new Canvas("canvas-foreground", DIMX, DIMY);

    background.setColor("skyblue");
    foreground.setImage(foregroundPath);

    let game = new Game(gameboard, foreground);
    let view = new GameView(game, foreground, gameboard);
    splashImage(view);
    soundToggleListener(game);
})


//********************   Listeners   ********************//
function splashImage(view) {                     
    let splashEl = document.getElementById("splash-container");
    document.addEventListener("click", () => {
        let fadeSplash = setInterval(() => {
            if(!splashEl.style.opacity) splashEl.style.opacity = 1;

            if(splashEl.style.opacity > 0) {
                splashEl.style.opacity -= 0.1;
            } else {
                splashEl.remove();
                clearInterval(fadeSplash);
                view.start();
            }
        }, 100)
    }, { once: true })
}

function soundToggleListener(game) {
    let toggle = document.getElementById("sound-effects");
    let soundOn = document.getElementById("sound-on");
    let mute = document.getElementById("sound-off");
    toggle.addEventListener("click", () => {
        if(soundOn.style.display !== "none") {
            soundOn.style.display = "none";
            mute.style.display = "block";
            game.soundOn = false;
        } else {
            soundOn.style.display = "block";
            mute.style.display = "none";
            game.soundOn = true;
        }
    })
}



