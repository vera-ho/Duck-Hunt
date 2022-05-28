export default class MovingObject {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.game = obj.game;
        this.imgSize = obj.imgSize;
        this.frameSize = obj.frameSize;
        this.maxFrame = obj.maxFrame;
    }

    animate(gameboard, sprite) {
        let currentFrame = 0;
        let col = 0;
        let row = 1;
        let numCol = 3;
        let numRow = 1;
        let duckAngle = 155;

        setInterval( () => {
            currentFrame++;
            if(currentFrame > this.maxFrame) currentFrame = 0;
            col = currentFrame % numCol;

            
            gameboard.ctx.clearRect(this.pos[0], this.pos[1], this.imgSize, this.imgSize);
            this.move();
            gameboard.ctx.drawImage(sprite, col * this.frameSize, duckAngle + row * this.frameSize, 
                    this.frameSize, this.frameSize, this.pos[0], this.pos[1], this.imgSize, this.imgSize);
        }, 90) 

    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        // this.pos = this.game.bounce(this.pos);
    }

}
