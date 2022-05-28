export default class MovingObject {
    constructor(obj) {
        if(!obj.frameRate) obj.frameRate = 90;
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.game = obj.game;
        this.imgSize = obj.imgSize;
        this.frameSize = obj.frameSize;
        this.maxFrame = obj.maxFrame;
        this.frameRate = obj.frameRate;
    }

    animate(ctx, sprite) {
        let col = 0;
        let row = 1;
        let numCol = 3;
        let numRow = 1;
        let duckAngle = 115;

        let currentFrame = 0;
        setInterval( () => {
            currentFrame++;
            if(currentFrame > this.maxFrame) currentFrame = 0;
            col = currentFrame % numCol;

            if(this.vel[0] < 0) {
                ctx.save();
                ctx.scale(-1, 1);
                ctx.clearRect(-this.pos[0], this.pos[1], this.imgSize, this.imgSize);
                this.move();
                ctx.drawImage(sprite, col * this.frameSize, duckAngle + row * this.frameSize, 
                    this.frameSize, this.frameSize, -this.pos[0], this.pos[1], this.imgSize, this.imgSize);
                ctx.restore();
            } else {
                ctx.clearRect(this.pos[0], this.pos[1], this.imgSize, this.imgSize);
                this.move();
                ctx.drawImage(sprite, col * this.frameSize, duckAngle + row * this.frameSize, 
                    this.frameSize, this.frameSize, this.pos[0], this.pos[1], this.imgSize, this.imgSize);
            }
        }, this.frameRate) 


    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        // this.pos = this.bounce(this.pos);
    }

}
