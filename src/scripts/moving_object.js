export default class MovingObject {
    constructor(obj) {
        if(!obj.frameRate) obj.frameRate = 70;
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.game = obj.game;
        this.imgSize = obj.imgSize;
        this.frameSize = obj.frameSize;
        this.maxFrame = obj.maxFrame;
        this.frameRate = obj.frameRate;
    }

    draw(ctx, sprite, spritePos) {
        ctx.drawImage(sprite, 
            this.col * this.frameSize + spritePos[0], 
            this.row * this.frameSize + spritePos[1], 
            this.frameSize, 
            this.frameSize, 
            this.pos[0], 
            this.pos[1], 
            this.imgSize, 
            this.imgSize);
    }

    move(time) {
        this.pos[0] += this.vel[0] * time;
        this.pos[1] += this.vel[1] * time;
    }

    randomVelocity(length) {
        const deg = 2 * Math.PI * Math.random();
        return this.scale([Math.sin(deg), Math.cos(deg)], length)
    }

    scale(vel, m) {
        return [vel[0] * m, vel[1] * m];
    }
}