import MovingObject from "./moving_object";
import { DIMX, DIMY } from "../index";

export default class Dog extends MovingObject {
    constructor(obj) {
        if(!obj.imgSize) obj.imgSize = 100;
        if(!obj.pos) obj.pos = [-100, 400];
        if(!obj.vel) obj.vel = [5, 0];
        super(obj);
    }

    // beginning of every round
    walkToBushes() {

    }

    // when player misses 3 shots and bird flies away
    laughAtPlayer() {

    }

    // when player successfully hunts a duck
    catchDucks() {

    }
}


    // // debugger
    // // draw dog 
    // this.dog.move();
    // // this.foreground.clear();
    // // this.foreground.setImage("./assets/duckhunt_transparent_nicepng.png");
    // this.foreground.ctx.drawImage(this.sprite, 
    //     0, 
    //     0, 
    //     this.dog.frameSize, 
    //     this.dog.frameSize,
    //     this.dog.pos[0], 
    //     this.dog.pos[1], 
    //     this.dog.imgSize, 
    //     this.dog.imgSize);
