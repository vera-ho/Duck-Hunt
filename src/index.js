document.addEventListener("DOMContentLoaded", () => {
    const DIMX = 800;
    const DIMY = 600;

    // Canvas Setup
    const cvsBackgroundEl = document.getElementById("canvas-background");
    const cvsGameBoardEl = document.getElementById("canvas-gameboard");
    const cvsForegroundEl = document.getElementById("canvas-foreground");
    const ctx_background = cvsBackgroundEl.getContext("2d");
    const ctx_gameboard = cvsGameBoardEl.getContext("2d");
    const ctx_foreground = cvsForegroundEl.getContext("2d");

    const canvas = [cvsBackgroundEl, cvsGameBoardEl, cvsForegroundEl];
    const ctx = [ctx_background, ctx_gameboard, ctx_foreground];
    canvas.forEach( (el) => {
        el.width = DIMX;
        el.height = DIMY;
    })

    // // testing
    const backgroundImage = new Image();
    backgroundImage.src = "./assets/background_sprite_by_nickanater1.png";
    backgroundImage.onload = () => {
        // draw half of sprite image. og: 2,580 x 3,230 
        // drawImage(source file, img start width, img start height, img width, image height, xpos, pos, dest width, dest height * 2??);
        ctx_foreground.drawImage(backgroundImage, 0, 1615, 2580, 3230, 0, 0, DIMX, 2 * DIMY);
        console.log("draw background");
    }
    // ctx_background.fillStyle = "purple";
    // ctx_gameboard.fillStyle = "transparent";
    // ctx_foreground.fillStyle = "transparent";
    // ctx.forEach( (el) => el.fillRect(0, 0, DIMX, DIMY))
})






