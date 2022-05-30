import MovingObject from "./moving_object";
import { DIMX, DIMY } from "../index";

export default class Duck extends MovingObject {
    constructor(obj) {
        if(!obj.type) obj.type = "green";
        if(!obj.spriteRow) obj.spriteRow = 0;
        if(!obj.spriteCol) obj.spriteCol = 0;

        super(obj);
        this.imgSize = 65;          // rendered on canvas
        this.frameSize = 40;        // sprite
        this.maxFrame = 3;
        this.pos = this.randomPosition();
        this.spriteCol = obj.spriteCol;
        this.spriteRow = obj.spriteRow;

        // unique to duck
        this.flying = true;
        this.timeElapsed = 0;
        this.type = obj.type;       // bird color

        // this.vel = this.randomVelocity(10);
    }

    // Starting random x position
    randomPosition() {
        let pos = [];
        pos[0] = Math.floor(Math.random() * DIMX);
        pos[1] = DIMY - (2.5 * this.frameSize);       // always start behind bushes
        return pos;
    }
    
    // Increment duck position
    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        if(this.flying) this.bounce(this.pos); 
    }

    // Duck reaches canvas border
    bounce(pos) {
        if(pos[0] < 0 || pos[0] > DIMX) {
            this.vel[0] = -this.vel[0];
        }
        if(pos[1] < 0 || pos[1] > DIMY - (2.5 * this.frameSize)) {
            this.vel[1] = -this.vel[1];
        }
    }

    draw(ctx, sprite, pos, time) {
        // Flap the duck - need to slow it down - frame rate issue
        // make flapDuck()
        this.timeElapsed += time;
        if(this.timeElapsed > 90) {
            this.timeElapsed = 0;
            this.spriteCol++;
            this.spriteCol = this.spriteCol % this.maxFrame;
        }

        // Refactor
        if(this.vel[0] < 0) {
            ctx.save();
            ctx.scale(-1, 1);
            ctx.drawImage(sprite, 
                this.spriteCol * this.frameSize + greenDuckPos[0], 
                this.spriteRow * this.frameSize + greenDuckPos[1], 
                this.frameSize, 
                this.frameSize, 
                -pos[0], 
                pos[1], 
                this.imgSize, 
                this.imgSize);
            ctx.restore();
        } else { 
            ctx.drawImage(sprite, 
                this.spriteCol * this.frameSize + greenDuckPos[0], 
                this.spriteRow * this.frameSize + greenDuckPos[1], 
                this.frameSize, 
                this.frameSize, 
                pos[0], 
                pos[1], 
                this.imgSize, 
                this.imgSize);
        }
    }

    spazz(ctx, sprite, pos) {
        ctx.drawImage(sprite,
            0 * this.frameSize + greenDuckPos[0], 
            3 * this.frameSize + greenDuckPos[1],
            this.frameSize, this.frameSize,
            pos[0], pos[1],
            this.imgSize, this.imgSize);
    }
    
    fall(ctx, sprite, pos) {
        ctx.drawImage(sprite,
            1 * this.frameSize + greenDuckPos[0], 
            3 * this.frameSize + greenDuckPos[1],
            this.frameSize, this.frameSize,
            pos[0], pos[1],
            this.imgSize, this.imgSize);
    }
}


//set bird sprite, in constructor?
// if abs(vel[1]) > 7
//     use 2nd row of sprite (horizontal)
// else if abs(vel[1]) < 7
//     use 1st row of sprite (angled)

/** Duck parameters **/
// Flight Direction
// row 0 = horizontal
// row 1 = diagonal
// row 2 = up
// row 3 = shot and falling
const HORIZONTAL = 0;
const DIAGONAL = 1;
const UP = 2
const greenDuckPos = [127, 115];    // Green Duck - Slow
const blueDuckPos = [0, 115];       // Blue Duck - Medium
const redDuckPos = [256, 115];      // Red Duck - Fast
// const spazzPos = [duckType, 235];

// Animation Notes
// this.ctx.drawImage(                          Parameter Type:
//      ducks,                                  source
//      col * frameSize + duckColOffset,        sprite target start x-pos
//      row * frameSize + duckRowOffset,        sprite target start y-pos
//      frameSize,                              sprite target img width
//      frameSize,                              sprite target img height
//      pos[0],                                 destination canvas x-pos
//      pos[1],                                 destination canvas y-pos
//      imgSize,                                final image size width 
//      imgSize                                 final image size height
//  );