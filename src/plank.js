class Plank {
  constructor(direction, player, context, x, y, width) {
    this.direction = direction;
    this.player = player;
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

  collideCheck() {
    if (this.x <= this.player.x && this.player.x < this.x + this.width) {
      if (this.player.y + this.player.height >= this.y) {
        this.player.jumping = false;
        this.player.y = this.y - this.player.height;
        this.player.yVelocity = 0;
      }
    }
  }

  // rightCollideCheck() {
  //
  // }
}

module.exports = Plank;
