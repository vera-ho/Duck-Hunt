import { DIMX, DIMY } from "..";
import Duck from "./duck";
// import { DIMX, DIMY } from "../index";

const spritePath = "./assets/duckhunt_various_sheet.png";

export default class Game {

    constructor(gameboard) {
        this.NUM_DUCKS = 2;
        this.gameboard = gameboard;
        this.ctx = gameboard.ctx;
        this.round = 1;
        this.prevTime = 0;

        this.duckDivs = [];
        this.duckArray = [];
        for(let i = 0; i < this.NUM_DUCKS; i++) {
            let vx = Math.floor((Math.random() * 5) + 1);
            let vy = Math.floor((Math.random() * 2) + 1);
            let duck = new Duck({
                game: this,
                vel: [vx, vy]
            });

            this.duckArray.push(duck);
        }

        // Load sprite
        this.sprite = new Image();
        this.sprite.src = spritePath;

        // Dog instance
        // Dog intro animation
        
        // listener for start button click
        // start game count down timer
        // startGame();
    }

    // onclick
    startGame() {
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop(timestamp) {
        // let timePassed = (timestamp - this.prevTime) / 1000;
        // this.prevTime = timestamp;

        // if(timePassed > 75) {
        this.gameboard.clear();
        this.duckArray.forEach( (duck) => {
            // duck.move(timePassed);
            duck.move();
            duck.draw(this.ctx, this.sprite, duck.pos);
        })
        window.requestAnimationFrame(this.gameLoop.bind(this));
        // }
    }

    // onclick
    restartGame() {

    }

    // onclick
    pauseGame() {

    }

    // win or lose condition triggered
    stopGame() {

    }
}