const Water = require('./water.js');
const LetterBlock = require('./letterblock.js');
const canvas = document.getElementById('backdrop');
const context = canvas.getContext('2d');

let a = new LetterBlock("a", 20, 20, context);
let v = new LetterBlock("v", 40, 800, context);
let water = new Water(context, canvas);
const allBlocks = [a, v];

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  water.draw();
  a.draw();
  v.draw();
  for (let i = 0; i < allBlocks.length; i++) {
    if (water.y < allBlocks[i].y) {
      allBlocks[i].cover()
    }
  }
  if (water.y < 135) {
    alert('GameOver')
  }
  water.raiseWater();
}

water.draw();
a.draw();
v.draw();
setInterval(draw, 200);
