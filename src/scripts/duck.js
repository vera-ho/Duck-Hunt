import MovingObject from "./moving_object";

export default class Duck extends MovingObject {
    constructor(obj) {
        if(!obj.type) obj.type = "green";
        super(obj);
        this.type = obj.type;
        this.frameSize = 40;
        this.maxFrame = 3;
        this.pos = this.randomPosition();
    }

    // Starting random x position (y is always bottom of screen)
    randomPosition() {
        let pos = [];
        pos[0] = Math.floor(Math.random() * 800);
        pos[1] = 550; 
        return pos;
    }

}

/** Duck parameters **/
// Duck frame
const duckFrame = 40;
const duckAnglePos = 115;
const frameSize = 40;   // square

// Green Duck - Slow
// Sprite starts 127 x 115 px

// Blue Duck - Medium
// Sprite starts 0 x 115 px

// Red Duck - Fast
// Sprite starts 256 x 115px

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