![Duck Hunt](https://i.imgur.com/yjncFVL.jpg)

# Play now! [Duck Hunt](https://vh71886.github.io/Duck-Hunt/)

# Background
Duck Hunt is an 80's retro game where the player takes Dog to go duck hunting. In this project to create a clone of the game, the player will "hunt" the flying ducks using their mouse or trackpad. Points are given for successful hunts and the player has limited ammo. The game is over when time runs out, the user runs out of ammo or all ducks are hunted.

![Demo](./assets/duck-hunt-demo.gif)

# Functionality
In Duck Hunt, users will be able to:
* Use a trackpad or mouse click to hunt a duck
* Gain points when successfully hunting
* Lose ammo per hunt attempt
* Lose the game if the time limit runs out

In addition, this project will include:
* Sound effects
* Mute and unmute sound effects

# Wireframes
![Wireframe](https://i.imgur.com/WmzEkKc.png)

# Technologies, Libraries, APIs
* Canvas API
* Animations
* Javascript
* HTML5 with CSS3

# Timeline
## Day 0: Planning and Research
Plan the project timeline, tasks, and search for assets. The assets will include sprites for the birds and the Dog. Research how to animate using sprite sheets and how to add sound effects.
- [X] General HTML Canvas research

## Day 1: Research and Setup
Continue any remaining research from Day 0 and begin the project setup. 
- [X] Complete skeleton setup
- [X] Animating with sprite sheets
- [X] Adding sound
- [X] Collision detection on click event

## Day 2: Set Up Classes and Properties
Create classes for the UI, the Dog, bird objects, the timer, the life count and the score.
- [X] Render canvas and background
- [X] Render navigation bar and control buttons
- [X] Render the duck objects (w/o event handling)
- [X] Render dog object (w/o event handling)
- [X] Render the timer, life count and score count
    - Graphics only, not operational at this time

### Code Snippets: Duck Animation
``` javascript
// Ducks have a randomized starting position behind the bushes
randomPosition() {
    let pos = [];
    pos[0] = Math.floor(Math.random() * DIMX);
    pos[1] = DIMY - (2.5 * this.frameSize);
    return pos;
}

// When a duck hits the bounds of the canvas, it will flip it's direction
bounce(pos) {
    if(pos[0] < 0 || pos[0] > DIMX) {
        this.vel[0] = -this.vel[0];
    }
    if(pos[1] < 0 || pos[1] > DIMY - (2.5 * this.frameSize)) {
        this.vel[1] = -this.vel[1];
    }
}

// Natural flight movement required a slower change in sprite position than frame rate
flap(time, sound) {
    this.timeElapsed += time;
    if(this.timeElapsed > 90) {
        this.timeElapsed = 0;
        this.spriteCol++;
        this.spriteCol = this.spriteCol % this.maxFrame;
        if(this.spriteCol > this.maxFrame) this.spriteCol = 0;
    }

    this.flapTime += time;
    if(this.flapTime > 360) {
        sound.duckFlap.pause();
        sound.duckFlap.currentTime = 0;
        sound.duckFlap.play();
        this.flapTime = 0;
    }
}
```


## Day 3 - 5: All Game Logic
Work on all the game logic.
- [X] Bird movement logic
- [X] Event handling logic
- [X] Game play logic
    - Points for successful hunt
    - Game-over logic
        - Missed hunts
        - Timer reaches zero
- [X] Sound effects

### Code Snippets: Game Logic
``` javascript
// The basic game loop: animate a frame until a game over condition has been reached
// Each frame will animate the duck, counters, and dog accordingly
gameLoop(timestamp) {
    let timeElapsed = (timestamp - this.prevTime);
    this.prevTime = timestamp;
    this.timer += timeElapsed;

    if(timeElapsed > 16) {
        this.gameboard.clear();

        if(!this.dogIntro) {
            this.updateCounters();
            this.animateDuck(timeElapsed);
        } else if(this.dogIntro) {
            this.animateDog(timeElapsed);
        }

        // Game over conditions
        if((this.ammo < 1 || this.duckArray.length === 0 || this.roundTime < 0) && this.animating) {
            console.log("stop")
            this.animating = false;
            this.stop();
        }
    }

    if(this.duckArray.length && this.animating) {
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }
}
```

### Code Snippets: Event Listeners
``` javascript
// The play button and splash page listeners only run once. The restart button will set a new single use play button listener
playButtonListener() {
    this.playButton.addEventListener("click", () => {
        this.sound.introSound.play();
        this.game.start();
        this.playButton.style.display = "none";

        this.huntEventListener();
        this.pauseButtonListener();
        this.restartButtonListener();
    }, { once: true });
}

// Some listeners need to be removed at the end of each game
soundToggleListener() {
    let toggle = document.getElementById("sound-effects");
    let soundOn = document.getElementById("sound-on");
    let soundOff = document.getElementById("sound-off");
    let sound = this.sound;
    toggle.addEventListener("click", toggleSound)

    if(soundOn.style.display === "none") {
        sound.mute();
    } else {
        sound.unmute();
    }

    function toggleSound() {
        if(soundOn.style.display !== "none") {
            soundOn.style.display = "none";
            soundOff.style.display = "block";
            sound.mute();
        } else {
            soundOn.style.display = "block";
            soundOff.style.display = "none";
            sound.unmute();
        }
    }

    function removeListener() {
        toggle.removeEventListener("click", toggleSound);
    }
    this.soundToggleListener.removeListener = removeListener;
} 

```

## Day 6: Finish Up Overall Project
- [X] Complete any lingering tasks
- [ ] Add bonus features if time allows
- [X] Deploy website

## Day 7: Polish and Shine
Make it pretty, make it glow.
- [X] Clean up code
- [X] Clean up UI

# Bonus Features
- [ ] Crossover with other game characters
    - Lose points if they are hunted
- [ ] Power-ups to regain ammo/time
- [ ] Add top 3 score board

# Project Checklist
The live project:
- [X] Link to portfolio website, Github account, LinkedIn account
- [X] Landing page/modal with clear instructions
- [X] Interactive
- [X] Styled, clean frontend
- [X] Ability to mute any sound effects

Production README:
- [X] Link to live project 
- [X] Instructions to play or interact with the project
- [X] List of technologies, libraries, APIs used
- [X] Technical implementation details with clean code snippets
- [X] To-dos and future features
- [X] No .DS_store files, debugger, console.logs
- [X] Organized file structure with /src and /dist directories