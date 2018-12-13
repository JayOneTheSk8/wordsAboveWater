class Plank {
  constructor(side, player, context, x, y, width) {
    this.side = side;
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

  sideCollideCheck() {
    if (this.x >= this.player.x && this.x - this.player.x === this.player.width) {
      if (this.y >= this.player.y && this.y - this.player.y <= this.player.height) {
        this.player.jumping = false;
        this.player.xVelocity = 0;
        this.player.yVelocity = 0;
        this.player.x = this.x - this.player.width;
      }
    }
  }

  collideCheck() {
    if (this.side === "left") {
      if (this.x <= this.player.x && this.player.x < this.x + this.width) {
        if (this.player.y + this.player.height >= this.y) {
          this.player.jumping = false;
          this.player.y = this.y - this.player.height;
          this.player.yVelocity = 0;
        }
      }
    } else {
      if (this.player.x + this.player.width >= this.x) {
        if (this.player.y < this.y && this.y - this.player.y <= this.player.height) {
          this.player.jumping = false;
          this.player.y = this.y - this.player.height;
          this.player.yVelocity = 0;
        }
      }
    }
  }
}

module.exports = Plank;
