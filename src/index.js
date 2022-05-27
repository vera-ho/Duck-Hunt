document.addEventListener("DOMContentLoaded", () => {
    const DIMX = 800;
    const DIMY = 528;

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
    backgroundImage.src = "./assets/duckhunt_transparent_nicepng.png";
    backgroundImage.onload = () => {
        // drawImage(source file, img start width, img start height, img width, image height, xpos, pos, dest width, dest height * 2??);
        ctx_foreground.drawImage(backgroundImage, 0, 0, 980, 655, 0, 0, DIMX, DIMY);
    }
    ctx_background.fillStyle = "skyblue";
    ctx_background.fillRect(0, 0, DIMX, DIMY)
})






