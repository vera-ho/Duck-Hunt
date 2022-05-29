import MovingObject from "./moving_object";
import { DIMX, DIMY } from "../index";

export default class Duck extends MovingObject {
    constructor(obj) {
        if(!obj.type) obj.type = "green";
        if(!obj.row) obj.row = 0;
        super(obj);
        this.type = obj.type;       // bird color
        this.imgSize = 65;          // sprite
        this.frameSize = 40;        // rendered on canvas
        this.maxFrame = 3;
        this.pos = this.randomPosition();
        this.col = 0;
        this.row = 0;
        // this.vel = this.randomVelocity(10);
    }

    // Starting random x position
    randomPosition() {
        let pos = [];
        pos[0] = Math.floor(Math.random() * DIMX);
        pos[1] = DIMY - (3 * this.frameSize);       // always start behind bushes
        return pos;
    }
    
    // Increment duck position
    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.bounce(this.pos); 
    }

    // Duck reaches canvas border
    bounce(pos) {
        if(pos[0] < 0 || pos[0] > DIMX) {
            this.vel[0] = -this.vel[0];
        }
        if(pos[1] < 0 || pos[1] > DIMY - (3 * this.frameSize)) {
            this.vel[1] = -this.vel[1];
        }
    }

    draw(ctx, sprite, pos) {
        // Flap the duck - need to slow it down - frame rate issue
        this.col++;
        this.col = this.col % this.maxFrame;

        this.move();
        if(this.vel[0] < 0) {
            ctx.save();
            ctx.scale(-1, 1);
            // this.move();
            ctx.drawImage(sprite, 
                this.col * this.frameSize + greenDuckPos[0], 
                this.row * this.frameSize + greenDuckPos[1], 
                this.frameSize, 
                this.frameSize, 
                -pos[0], 
                pos[1], 
                this.imgSize, 
                this.imgSize);
            ctx.restore();
        } else { 
            // this.move();
            ctx.drawImage(sprite, 
                this.col * this.frameSize + greenDuckPos[0], 
                this.row * this.frameSize + greenDuckPos[1], 
                this.frameSize, 
                this.frameSize, 
                pos[0], 
                pos[1], 
                this.imgSize, 
                this.imgSize);
        }
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