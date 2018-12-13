class Controller {
  constructor(player) {
    this.left = false;
    this.right = false;
    this.up = false;
    this.player = player;
    this.keyListener = this.keyListener.bind(this);
  }

  keyListener(event) {
    const keyState = (event.type === 'keydown' ? true : false);
    switch (event.keyCode) {
      case 32: // spacebar
      case 38: // up
        this.up = keyState;
        break;
      case 37: // left
        this.left = keyState;
        break;
      case 39: //right
        this.right = keyState;
        break;
      default:
        break;
    }
  }

  buttonPressed() {
    if (this.up && this.player.jumping === false) {
      this.player.yVelocity -= 35;
      this.player.jumping = true;
    } else if (this.left) {
      this.player.xVelocity -= 0.6;
    } else if (this.right) {
      this.player.xVelocity += 0.6;
    }
  }
}

module.exports = Controller;
