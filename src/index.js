import Canvas from "./scripts/canvas";

document.addEventListener("DOMContentLoaded", () => {
    const DIMX = 800;
    const DIMY = 528;
    const foregroundPath = "./assets/duckhunt_transparent_nicepng.png";

    // Canvas Setup
    const background = new Canvas("canvas-background", DIMX, DIMY);        
    const gameboard = new Canvas("canvas-gameboard", DIMX, DIMY);
    const foreground = new Canvas("canvas-foreground", DIMX, DIMY);

    background.setColor("skyblue");
    foreground.setImage(foregroundPath);
    
})