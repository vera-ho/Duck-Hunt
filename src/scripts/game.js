// import bird, dog, util?

export default class Game {
    constructor() {
        // variables
        this.hunted = [];
        this.missed = [];
        this.ducks = [];
        this.round = 1;

        // Dog instance
        // Dog intro animation
        
        // listener for start button click
        // start game count down timer
        // startGame();
    }


    // onclick
    startGame() {
        
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

    // Duck reaches canvas border
    // Currently wraps, need to add physics for bounce
    bounce(pos) {
        if(pos[0] < 0) {
            pos[0] = DIMX;
        }
        if(pos[0] > DIMX){
            pos[0] = 0;
        }
        if(pos[1] < 0) {
            pos[1] = DIMY;
        }
        if(pos[1] > DIMY) {
            pos[1] = 0;
        }
        return pos;
    }
}