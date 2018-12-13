class Player {
  constructor(context, name, x, y) {
    this.context = context;
    this.name = name;
    this.x = x;
    this.y = y;
    this.jumping = false
    this.xVelocity = 0;
    this.yVelocity = 0;
  }

}

module.exports = Player;
