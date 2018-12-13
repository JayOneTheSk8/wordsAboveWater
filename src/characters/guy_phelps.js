const Player = require('../player');

class GuyPhelps extends Player {
  constructor(canvas, context, name, x, y) {
    super(canvas, context, name, x, y);
    this.width = 30;
    this.height = 50;
  }

  draw() {
    this.context.beginPath();
    this.context.lineWidth = '3';
    this.context.fillStyle = 'red';
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.fill();
    this.context.closePath();
    // this.context.drawImage(this.img, this.startX, this.startY);
  }

  gravity() {
    this.yVelocity += 1.5;
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.xVelocity *= 0.9;
    this.yVelocity *= 0.9;
  }
}

module.exports = GuyPhelps;
