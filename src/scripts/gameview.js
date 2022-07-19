import Game from "./game";
import GameAudio from "./gameaudio";

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
        this.playButtonListener();
        this.soundToggleListener();
    }

    soundToggleListener() {
        let game = this.game;
        let toggle = document.getElementById("sound-effects");
        let soundOn = document.getElementById("sound-on");
        let mute = document.getElementById("sound-off");
        toggle.addEventListener("click", toggleSound)
        // toggle.addEventListener("click", toggleSound.bind(this))

        function toggleSound() {
            if(soundOn.style.display !== "none") {
                soundOn.style.display = "none";
                mute.style.display = "block";
                game.soundOn = false;

                // this.game.soundOn = false;
            } else {
                soundOn.style.display = "block";
                mute.style.display = "none";
                game.soundOn = true;
            }
        }

        function removeListener() {
            // toggle.removeEventListener("click", toggleSound.bind(this));
            toggle.removeEventListener("click", toggleSound);

        }
        this.soundToggleListener.removeListener = removeListener;
    } 

    playButtonListener() {
        this.playButton.addEventListener("click", () => {
            let sound = new GameAudio();
            if(this.game.soundOn) {
                sound.introSound.play();
            } else {
                if(!sound) return;
                sound.introSound.pause();
            }

            this.game.start();
            this.playButton.style.display = "none";

            this.huntEventListener();
            this.pauseButtonListener();
            this.restartButtonListener();
        }, { once: true });
    }

    huntEventListener() {
        let canvas = this.foreground.canvas;
        canvas.addEventListener("click", huntEvent)
        let count = 0;
        let game = this.game;

        function stopListener() {
            canvas.removeEventListener("click", huntEvent)
        }
        this.huntEventListener.stopListener = stopListener;
    
        function huntEvent(e) {
            let sound = new GameAudio();
            if(game.soundOn) {
                sound.shoot.play();
            } else {
                sound.shoot.pause();
            }
    
            if(game.animating && !game.dogIntro) {
                let bound = canvas.getBoundingClientRect();
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
                        // animate laughing dog
                    }
                }
            
                if(!game.hit && game.ammo > 0 && game.animating) {
                    // console.log("Miss! Haha.")
                    game.ammo--;
                } 
            }
        }
    }

    pauseButtonListener() {
        let game = this.game;
        let pauseButton = document.getElementById("pause-button") 
        pauseButton.addEventListener("click", buttonEvent)

        function buttonEvent(e) {
            if(pauseButton.innerHTML === "Pause" && game.animating) {
                game.pause();
                pauseButton.innerHTML = "Resume";
            } else {
                pauseButton.innerHTML = "Pause";
                game.resume();
            }
        }
    }

    restartButtonListener() {
        let game = this.game;
        let gameboard = this.gameboard;
        let foreground = this.foreground;
        let huntEventListener = this.huntEventListener;
        let playButton = this.playButton;
        let pauseButton = this.pauseButton;
        let newGame = this.newGame;
        let removeSoundListener = this.soundToggleListener;

        let restartButton = document.getElementById("restart-button");
        restartButton.addEventListener("click", restart);

        function restart() {
            game.stop();
            game.message.style.zIndex = "0";

            huntEventListener.stopListener();
            restartButton.removeEventListener("click", restart);
            // debugger
            removeSoundListener.removeListener();

            if(pauseButton.innerHTML === 'Resume') {
                pauseButton.innerHTML = 'Pause'
            }

            game.counterEl.style.zIndex = "0";
            gameboard.clear();
            game.restart();

            playButton.style.display = "block";
            newGame(foreground, gameboard);
        }
    }

    newGame(foreground, gameboard) {
        let newGame = new Game(gameboard, foreground);
        let view = new GameView(newGame, foreground, gameboard);
        view.start();
    }

}
