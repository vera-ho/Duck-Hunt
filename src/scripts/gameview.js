import Game from "./game";

export default class GameView {
    constructor(game, foreground, gameboard) {
        this.game = game;
        this.foreground = foreground;
        this.gameboard = gameboard;

        // ELements
        this.playButton = document.getElementById("play-button");
        this.pauseButton = document.getElementById("pause-button");
        this.restartButton = document.getElementById("restart-button");
    }

    start() {
        
    }

    playButtonListener() {
        this.playButton.addEventListener("click", () => {
            if(this.game.soundOn) {
                let sound = new GameAudio();
                sound.introSound.play();
            } else {
                if(!sound) return;
                sound.pause();
            }

            this.game.start();
            this.playButton.style.display = "none";

            huntEventListener(foreground, game);
            pauseButtonListener(game);
            restartButtonListener(foreground, gameboard, game);
    }, { once: true });
    }
}






function huntEventListener(foreground, game) {
    foreground.canvas.addEventListener("click", (e) => {
        if(game.soundOn) {
            let sound = new GameAudio();
            sound.shoot.play();
        }

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
    let newGame = new Game(gameboard, foreground);
    playButtonListener(foreground, gameboard, newGame);
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
            // console.log("Miss! Haha.")
            // animate laughing dog

        }
    }

    if(!game.hit && game.ammo > 0 && game.animating) {
        console.log("Miss! Haha.")
        game.ammo--;
    } 
}
