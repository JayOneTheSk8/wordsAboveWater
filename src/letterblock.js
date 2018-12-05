class LetterBlock {
  constructor(letter, x, y, context) {
    this.color = 'orange';
    this.context = context;
    this.x = x;
    this.y = y;
    this.letter = letter.toUpperCase();
    this.value = this.values()[letter.toUpperCase()];
  }

  values() {
    return {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10,
    };
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.lineWidth = "6"
    this.context.shadowBlur = 0;
    this.context.rect(this.x, this.y, 50, 50);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();
    this.drawLetter();
  }

  drawLetter() {
    this.context.beginPath();
    this.context.font = "bold 30px Arial";
    this.context.fillStyle = 'white';
    this.context.fillText(this.letter, this.x + 15, this.y + 35);
  }

  cover() {
    this.color = 'grey';
  }
}

module.exports = LetterBlock;
