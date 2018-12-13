class Player {
  constructor(canvas, context, name, x, y) {
    this.canvas = canvas;
    this.context = context;
    this.name = name;
    this.x = x;
    this.y = y;
    this.jumping = false
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.word = [];
    this.values = [];
    this.wordList = [];
    this.score = 0;
  }

  wall() {
    if (this.x <= 0) {
      this.xVelocity = 0;
      this.x = 0;
    } else if (this.x + this.width >= this.canvas.width) {
      this.xVelocity = 0;
      this.x = this.canvas.width - this.width;
    }
  }

  addWord(word) {
    this.wordList.push(word);
  }

  addLetter(letter, value){
    this.word.push(letter);
    this.values.push(value);
  }
}

module.exports = Player;
