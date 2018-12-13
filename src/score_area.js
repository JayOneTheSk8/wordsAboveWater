class Score {
  constructor(context, player, x, y) {
    this.context = context;
    this.player = player;
  }

  draw() {
    this.context.beginPath();
    this.context.font = "30px Arial";
    this.context.fillStyle = "black";
    this.context.fill();
    this.context.closePath();
  }
}
