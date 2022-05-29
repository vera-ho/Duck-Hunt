import { DIMX, DIMY } from "..";
import Duck from "./duck";
// import { DIMX, DIMY } from "../index";

const spritePath = "./assets/duckhunt_various_sheet.png";

export default class Game {

    constructor(gameboard) {
        this.NUM_DUCKS = 5;
        this.gameboard = gameboard;
        this.ctx = gameboard.ctx;
        this.round = 1;

        this.duckArray = [];
        for(let i = 0; i < this.NUM_DUCKS; i++) {
            let vx = Math.floor((Math.random() * 3) + 2);
            let vy = Math.floor((Math.random() * 2) + 2);
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
        console.log("started new game instance");
    }

    // onclick
    startGame() {
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop() {
        console.log("gameloop");
        this.gameboard.clear();
        this.duckArray.forEach( (duck) => {
            duck.draw(this.ctx, this.sprite, duck.pos, 0, 0);
        })
        // debugger
        window.requestAnimationFrame(this.gameLoop.bind(this));
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