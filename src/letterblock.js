class LetterBlock {
  constructor(player, letter, x, y, context) {
    this.player = player;
    this.color = 'orange';
    this.context = context;
    this.x = x;
    this.y = y;
    this.letter = letter.toUpperCase();
    this.value = this.values()[letter.toUpperCase()];
    this.width = 50;
    this.height = 50;
    this.timer = 1;
    this.landed = false;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.strokeStyle = 'black';
    this.context.lineWidth = '6';
    this.context.shadowBlur = 0;
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();
    this.drawLetter();
  }

  drawLetter() {
    this.context.beginPath();
    this.context.font = 'bold 30px Arial';
    this.context.fillStyle = 'white';
    this.context.fillText(
      this.letter,
      this.x + this.letterPos()[this.letter],
      this.y + 35
    );
    this.context.closePath();
  }

  cover() {
    this.color = 'grey';
  }

  uncover() {
    this.color = 'orange';
    this.landed = false;
  }

  checkTimer(){
    if (this.timer === 50 && this.color === 'orange') {
      this.cover();
      this.player.addLetter(this.letter, this.value);
      this.timer = 0;
    }
  }

  topCollisionCheck() {
    if (this.player.x + this.player.width >= this.x && this.player.x <= this.x + this.width) {
      if (this.player.y < this.y) {
        if (this.y - this.player.y <= this.player.height) {
          this.player.jumping = false;
          this.player.y = this.y - this.player.height;
          this.player.yVelocity = 0;
          this.timer++;
          if (this.landed === false) {
            this.landed = true;
          }
          return;
        }
      }
    }
    this.landed = false;
    this.timer = 0;
  }

  letterPos() {
    return {
      A: 14,
      B: 14,
      C: 14,
      D: 14,
      E: 14,
      F: 15,
      G: 13,
      H: 14,
      I: 20,
      J: 16,
      K: 14,
      L: 16,
      M: 13,
      N: 15,
      O: 13,
      P: 15,
      Q: 13,
      R: 13,
      S: 15,
      T: 15.5,
      U: 14,
      V: 15,
      W: 11,
      X: 14,
      Y: 14.5,
      Z: 15,
    };
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
}

module.exports = LetterBlock;
