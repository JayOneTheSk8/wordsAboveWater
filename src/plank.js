class Plank {
  constructor(context, x, y, width) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
  }

  draw() {
    this.context.beginPath();
    this.context.shadowBlur = 0;
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x + this.width, this.y);
    this.context.lineWidth = '8';
    this.context.strokeStyle = '#A85331';
    this.context.stroke();
    this.context.closePath();
  }

  collideCheck(player) {
    // debugger
    if (this.x < player.x && player.x < this.x + this.width) {
      if (player.y + player.height >= this.y) {
        player.jumping = false;
        player.y = this.y - player.height;
        player.yVelocity = 0;
      }
    }
  }
}

module.exports = Plank;
