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

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    }

    randomVelocity(length) {
        const deg = 2 * Math.PI * Math.random();
        return this.scale([Math.sin(deg), Math.cos(deg)], length)
    }

    scale(vel, m) {
        return [vel[0] * m, vel[1] * m];
    }
}