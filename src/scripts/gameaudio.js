export default class GameAudio {

    constructor() {

        // trying different paths to deploy with sound properly
        this.duckFlap = new Audio("./assets/sound/duckhunt001.wav");
        this.shoot = new Audio("./sound/duckhunt002.wav");
        this.introSound = new Audio();
        this.introSound.src = "./../../assets/sound/duckhunt003.mp3";
        // this.duckFlap = new Audio("./../../assets/sound/duckhunt001.wav");
        // this.shoot = new Audio("./../../assets/sound/duckhunt002.wav");
        // this.introSound = new Audio("./../../assets/sound/duckhunt003.mp3");
        // this.bark = new Audio("../../assets/sound/duckhunt004.wav");
    }

}

// /duck-hunt/src/scripts/gameaudio.js
// /duck-hunt/assets/sound/duckhunt001.wav