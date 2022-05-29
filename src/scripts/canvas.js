export default class Canvas {
    constructor(eleId, dim_x, dim_y) {
        this.canvas = document.getElementById(eleId);
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = dim_x;
        this.canvas.height = dim_y;
    }

    setImage(imagePath) {
        const image = new Image();
        image.src = imagePath;
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, this.canvas.width, this.canvas.height);
        }
    }

    setColor(color) {
        this.clear();
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

