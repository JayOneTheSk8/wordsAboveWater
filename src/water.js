class Water {
  constructor(context, canvas) {
    this.context = context;
    this.canvas = canvas;
    this.x = 0;
    this.y = 900;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = '#009BFE';
    this.context.shadowColor = '#009BFE';
    this.context.shadowBlur = 13;
    this.context.fillRect(this.x, this.y, this.canvas.width, this.canvas.height);
  }

  raiseWater() {
    const waterCurrent = (this.y >= this.canvas.height / 2 ? (900 * 0.0001) :  (1200 * 0.0001))
    this.y -= waterCurrent;
  }
}

module.exports = Water;
