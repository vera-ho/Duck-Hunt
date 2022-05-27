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
    ctx_background.fillStyle = "purple";
    ctx_gameboard.fillStyle = "blue";
    ctx_foreground.fillStyle = "transparent";
    ctx.forEach( (el) => el.fillRect(0, 0, DIMX, DIMY))
})






