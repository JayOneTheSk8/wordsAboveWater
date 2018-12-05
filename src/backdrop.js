const Water = require('./water.js');
const LetterBlock = require('./letterblock.js');
const Plank = require('./plank.js');

const canvas = document.getElementById('backdrop');
const context = canvas.getContext('2d');

const startPlank = new Plank(context, 0, 820, 200);

const a = new LetterBlock("a", 30, 20, context);
const c = new LetterBlock("c", 130, 550, context);
const d = new LetterBlock("d", 50, 420, context);
const e = new LetterBlock("e", 350, 20, context);
const g = new LetterBlock("g", 370, 570, context);
const h = new LetterBlock("h", 370, 290, context);
const i = new LetterBlock("i", 200, 20, context);
const n = new LetterBlock("n", 270, 440, context);
const r = new LetterBlock("r", 35, 280, context);
const s = new LetterBlock("s", 120, 150, context);
const t = new LetterBlock("t", 275, 150, context);
const v = new LetterBlock("v", 280, 700, context);

const water = new Water(context, canvas);
const allBlocks = [a, e, i, s, t, r, h, d, n, c, g, v];

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  water.draw();
  startPlank.draw();
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
startPlank.draw();
for (let i = 0; i < allBlocks.length; i++) {
  allBlocks[i].draw();
}
setInterval(draw, 200);
