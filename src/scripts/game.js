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
        this.animating = true;

        this.duckArray = [];
        for(let i = 0; i < this.NUM_DUCKS; i++) {
            let vx = Math.random() + 1;
            let vy = Math.random() + 1;
            let duck = new Duck({
                // game: this,  // don't need? remove from duck/moving object constructor?
                vel: [vx, vy]
                // vel: [0.5, 0.5]  // really slow for testing
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

    start() {
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop(timestamp) {
        // let timePassed = (timestamp - this.prevTime) / 1000;
        // this.prevTime = timestamp;

        // if(timePassed > 75) {
        this.gameboard.clear();
        for(let i = 0; i < this.duckArray.length; i++) {
            let duck = this.duckArray[i];
        // this.duckArray.forEach( (duck) => {
            // duck.move(timePassed);
            duck.move();
            if(duck.flying) {
                duck.draw(this.ctx, this.sprite, duck.pos);
            } else {
                // if (duration < 1500 ms)
                // duck.spazz(this.ctx, this.sprite, duck.pos);

                // else if duration > 1500ms
                if(duck.vel[0] === 0 && duck.vel[1] === 0) duck.vel = [0, 1];
                duck.fall(this.ctx, this.sprite, duck.pos);

            }

            if(duck.pos[1] >= DIMY) {
                this.duckArray = this.duckArray.filter( (ele, idx) => { 
                    return i !== idx;
                })
                break;
            }
        }
        // ) forEach

        if(this.duckArray.length && this.animating) {
            window.requestAnimationFrame(this.gameLoop.bind(this));
        }
        // }
    }

    // onclick
    restartGame() {
        
    }

    // onclick
    pauseGame() {
        this.animating = false;
    }

    // win or lose condition triggered
    stopGame() {
        this.animating = false;
    }
}