export default class GameAudio {

    constructor() {
        this.duckFlap = new Audio("./assets/sound/duckhunt001.wav");
        this.shoot = new Audio("./assets/sound/duckhunt002.wav");
        this.introSound = new Audio("./assets/sound/duckhunt003.mp3");
        // console.log(this.introSound.volume);
        // this.allSound = [this.duckFlap, this.shoot, this.introSound];
    }

    mute() {
        this.duckFlap.volume = 0;
        this.shoot.volume = 0;
        this.introSound.volume = 0;
    }

    unmute() {
        this.duckFlap.volume = 1;
        this.shoot.volume = 1;
        this.introSound.volume = 1;
    }
}
