import MovingObject from "./moving_object";
import { DIMX, DIMY } from "../index";

export default class Dog extends MovingObject {
    constructor(obj) {
        if(!obj.imgSize) obj.imgSize = 100;
        if(!obj.pos) obj.pos = [-100, 400];
        if(!obj.vel) obj.vel = [5, 0];
        super(obj);
        this.timeElapsed = 0;
    }

    // beginning of every round
    walkToBushes(ctx, sprite, time) {
        this.timeElapsed += time;
        if(this.timeElapsed > 50) {
            this.timeElapsed = 0;
            this.spriteCol++;
            this.spriteCol = this.spriteCol % this.maxFrame;
            if(this.spriteCol > this.maxFrame) this.spriteCol = 0;
        }

        ctx.drawImage(sprite, 
            this.spriteCol * this.frameSize,
            this.spriteRow * this.frameSize - 5,
            this.frameSize, 
            this.frameSize,
            this.pos[0], 
            this.pos[1], 
            this.imgSize, 
            this.imgSize);
    }

    perk(ctx, sprite) {

        ctx.drawImage(sprite, 
            0, // this.spriteCol * this.frameSize,
            this.frameSize - 5, // this.spriteRow * this.frameSize - 5,
            this.frameSize, 
            this.frameSize,
            this.pos[0], 
            this.pos[1], 
            this.imgSize, 
            this.imgSize);

        if(this.pos[0] >= 250) {
            this.vel[1] = -2.5;
            this.maxFrame = 2;
            this.spriteRow = 1;
            this.spriteCol = 1;
        }
    }

    jump(ctx, sprite, time) {
        this.timeElapsed += time;
        if(this.timeElapsed > 400) {
            this.timeElapsed = 0;
            this.spriteCol++;
            // this.spriteCol = this.spriteCol % this.maxFrame;
            if(this.spriteCol > this.maxFrame) this.spriteCol = 1;
        }

        ctx.drawImage(sprite, 
            this.spriteCol * this.frameSize,
            this.spriteRow * this.frameSize - 5,
            this.frameSize, 
            this.frameSize,
            this.pos[0], 
            this.pos[1], 
            this.imgSize, 
            this.imgSize);
    }

    // when player misses 3 shots and bird flies away
    laughAtPlayer() {

    }

    // when player successfully hunts a duck
    catchDucks() {

    }
}

// Animation Notes
// this.ctx.drawImage(                          Parameter Type:
//      sprite,                                 source
//      col * frameSize + colOffset,            sprite target start x-pos
//      row * frameSize + rowOffset,            sprite target start y-pos
//      frameSize,                              sprite target img width
//      frameSize,                              sprite target img height
//      pos[0],                                 destination canvas x-pos
//      pos[1],                                 destination canvas y-pos
//      imgSize,                                final image size width 
//      imgSize                                 final image size height
//  );