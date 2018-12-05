const Water = require('./water.js');
const LetterBlock = require('./letterblock.js');
const canvas = document.getElementById('backdrop');
const context = canvas.getContext('2d');

let a = new LetterBlock("a", 30, 20, context);
let c = new LetterBlock("c", 130, 550, context);
let d = new LetterBlock("d", 50, 420, context);
let e = new LetterBlock("e", 350, 20, context);
let g = new LetterBlock("g", 370, 570, context);
let h = new LetterBlock("h", 370, 290, context);
let i = new LetterBlock("i", 200, 20, context);
let n = new LetterBlock("n", 270, 440, context);
let r = new LetterBlock("r", 35, 280, context);
let s = new LetterBlock("s", 120, 150, context);
let t = new LetterBlock("t", 275, 150, context);
let v = new LetterBlock("v", 280, 700, context);

let water = new Water(context, canvas);
const allBlocks = [a, e, i, s, t, r, h, d, n, c, g, v];

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
