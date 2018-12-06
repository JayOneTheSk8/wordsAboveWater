const Player = require('../player');

class GuyPhelps extends Player {
  draw() {
    this.context.beginPath();
    this.context.drawImage(this.img, this.startX, this.startY);
    this.context.closePath();
  }
}

module.exports = GuyPhelps;
