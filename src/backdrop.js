const Water = require('./water.js');
const LetterBlock = require('./letterblock.js');
const canvas = document.getElementById('backdrop');
const context = canvas.getContext('2d');

let a = new LetterBlock("a", 30, 20, context);
// let c = new LetterBlock("c", 60, 20, context);
// let d = new LetterBlock("d", 90, 20, context);
let e = new LetterBlock("e", 350, 20, context);
// let g = new LetterBlock("g", 20, 20, context);
// let h = new LetterBlock("h", 20, 20, context);
let i = new LetterBlock("i", 200, 20, context);
// let n = new LetterBlock("n", 20, 20, context);
// let r = new LetterBlock("r", 20, 20, context);
// let s = new LetterBlock("s", 20, 20, context);
// let t = new LetterBlock("t", 20, 20, context);
// let v = new LetterBlock("v", 40, 800, context);

let water = new Water(context, canvas);
const allBlocks = [a, e, i];
// const allBlocks = [a, c, d, e, g, h, i, n, r, s, t];

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  water.draw();
  for (let i = 0; i < allBlocks.length; i++) {
    if (water.y < allBlocks[i].y) {
      allBlocks[i].cover()
    }
    allBlocks[i].draw();
  }
  if (water.y < 135) {
    alert('GameOver')
  }
  water.raiseWater();
}

water.draw();
for (let i = 0; i < allBlocks.length; i++) {
  allBlocks[i].draw();
}
setInterval(draw, 200);
