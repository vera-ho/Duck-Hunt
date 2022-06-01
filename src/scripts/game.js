import Duck from "./duck";
import Dog from "./dog";
import { DIMX, DIMY } from "../index";

const spritePath = "./assets/duckhunt_various_sheet.png";

export default class Game {

    constructor(gameboard, foreground) {
        this.NUM_DUCKS = 5;
        this.gameboard = gameboard;
        this.foreground = foreground;
        this.ctx = gameboard.ctx;
        this.hit = false;
        // this.round = 1;

        // Animation
        this.prevTime = 0;
        this.animating = false;
        this.timer = 0;
        this.dogIntro = true;

        // counters
        this.score = 0;
        this.ammo = 10;
        this.roundTime = 15;
        this.counterEl = document.getElementById("counter-container");
        this.scoreEl = document.getElementById("score-counter");
        this.ammoEl = document.getElementById("ammo-counter");
        this.timerEl = document.getElementById("time-counter");

        // Load images
        this.sprite = new Image();
        this.sprite.src = spritePath;
        this.fgimg = new Image();
        this.fgimg.src = "./assets/duckhunt_transparent_nicepng.png";

        // Create ducks
        this.duckArray = [];
        for(let i = 0; i < this.NUM_DUCKS; i++) {
            let vx = Math.random() * 3 + 2;
            let vy = Math.random() * 2 + 1;
            let duck = new Duck({
                game: this,
                vel: [vx, vy]
            });
            this.duckArray.push(duck);
        }

        // Create dog
        this.dog = new Dog({
            pos: [0, 380],
            vel: [2, 0],
            game: this,
            frameSize: 60,
            maxFrame: 5, 
            spriteCol: 0,
            spriteRow: 0,
            imgSize: 130
        });
    }

    start() {
        this.animating = true;
        this.prevTime = performance.now();
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    gameLoop(timestamp) {
        let timeElapsed = (timestamp - this.prevTime);
        this.prevTime = timestamp;
        this.timer += timeElapsed;

        if(!this.dogIntro) this.updateCounters();

        if(timeElapsed > 16) {
            this.gameboard.clear();

            if(!this.dogIntro) {
                this.animateDuck(timeElapsed);
            }
            this.animateDog(timeElapsed);

            // Game over conditions
            if(this.ammo < 1 || this.duckArray.length === 0 || this.roundTime < 0) {
                this.stop();
            }
        }

        if(this.duckArray.length && this.animating) {
            window.requestAnimationFrame(this.gameLoop.bind(this));
        }
    }

    animateDuck(timeElapsed) {
        for(let i = 0; i < this.duckArray.length; i++) {
            if(i > 1) break;    // spawn max 2 birds at a time
            if(this.roundTime < 0) this.timerEl = 0;

            let duck = this.duckArray[i];

            duck.move();
            if(duck.flying) {
                if(duck.vel[0] < 0) {
                    duck.draw(this.ctx, this.sprite, [-duck.pos[0], duck.pos[1]], timeElapsed);
                } else {
                    duck.draw(this.ctx, this.sprite, duck.pos, timeElapsed);
                }
            } else {
                duck.timeElapsed += timeElapsed;
                if (duck.timeElapsed < 275) {
                    duck.spazz(this.ctx, this.sprite, duck.pos);
                } else {
                    if(duck.vel[0] === 0 && duck.vel[1] === 0) duck.vel = [0, 5];
                    duck.fall(this.ctx, this.sprite, duck.pos);
                }
            }

            if(duck.pos[1] >= DIMY) {
                this.duckArray = this.duckArray.filter( (ele, idx) => { 
                    return i !== idx;
                })
                break;
            }
        }
    }

    animateDog(timeElapsed) {
        this.foreground.clear();
        this.foreground.ctx.drawImage(this.fgimg, 0, 0, this.fgimg.width, this.fgimg.height, 0, 0, DIMX, DIMY);

        this.dog.move();
        if(this.dog.pos[0] < 330) {
            this.dog.walkToBushes(this.foreground.ctx, this.sprite, this.dog.pos, timeElapsed);
            this.timer = 0;
        } else {
            this.dogIntro = false;
            this.counterEl.style.zIndex = "5";
        }

    }

    updateCounters() {
        this.roundTime = 15500 - this.timer;
        this.scoreEl.innerHTML = `Score &nbsp;${this.score * 1000}`;
        this.ammoEl.innerHTML =  `Ammo &nbsp;${this.ammo}`;
        this.timerEl.innerHTML = `Time &nbsp;&nbsp;${Math.round(this.roundTime/1000)}`;
        this.hit = false;
    }

    restart() {
        this.duckArray = [];
        this.hit = false;
        this.animating = false;
        this.timer = 0;
        this.score = 0;
        this.ammo = 10;
        this.roundTime = 15;
    }

    pause() {
        this.animating = false;
    }

    resume() {
        this.prevTime = performance.now();
        this.animating = true;
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    stop() {
        this.animating = false;
    }
}