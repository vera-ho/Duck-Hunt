export default class MovingObject {
    constructor(obj) {
        this.pos = obj.pos;
        this.vel = obj.vel;
        this.game = obj.game;
    }

    animate(gameboard, sprite, maxFrame, frameSize) {
        let currentFrame = 0;
        let col = 0;
        let row = 1;
        let numCol = 3;
        let numRow = 1;
        let duckAngle = 115;

        setInterval( () => {
            currentFrame++;
            if(currentFrame > maxFrame) currentFrame = 0;

            col = currentFrame % numCol;

            gameboard.ctx.clearRect(0, 0, gameboard.canvas.width, gameboard.canvas.height);
            gameboard.ctx.drawImage(sprite, col * frameSize, duckAngle + row * frameSize, frameSize, frameSize, this.pos[0], this.pos[1], 65, 65);
            gameboard.ctx.drawImage(sprite, col * frameSize, duckAngle, frameSize, frameSize, 250, 215, 65, 65);
        }, 100)

    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.pos = this.game.bounce(this.pos);
    }

}
