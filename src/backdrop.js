const Water = require('./water');
const LetterBlock = require('./letterblock');
const Plank = require('./plank');
const GuyPhelps = require('./characters/guy_phelps');

const guyPhelpsImg = document.getElementById('guyPhelps');
const canvas = document.getElementById('backdrop');
const context = canvas.getContext('2d');
const endAxis = 135;

// const guyPhelps = new GuyPhelps(context, 'Guy Phelps', 20, 820, guyPhelpsImg);

const startPlank = new Plank(context, 0, 820, 200);
const submitPlank = new Plank(context, canvas.width - 80, endAxis - 1, 80);
const leapingPlank = new Plank(context, canvas.width - 80, endAxis + 100, 80);

const a = new LetterBlock('a', 30, 20, context);
const c = new LetterBlock('c', 130, 550, context);
const d = new LetterBlock('d', 50, 420, context);
const e = new LetterBlock('e', 350, 20, context);
const g = new LetterBlock('g', 370, 570, context);
const h = new LetterBlock('h', 370, 290, context);
const i = new LetterBlock('i', 200, 20, context);
const n = new LetterBlock('n', 270, 440, context);
const r = new LetterBlock('r', 35, 280, context);
const s = new LetterBlock('s', 120, 150, context);
const t = new LetterBlock('t', 275, 150, context);
const v = new LetterBlock('v', 280, 700, context);

const water = new Water(context, canvas);
const allBlocks = [a, e, i, s, t, r, h, d, n, c, g, v];

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  water.draw();
  startPlank.draw();
  submitPlank.draw();
  leapingPlank.draw();
  // guyPhelps.draw();
  for (let i = 0; i < allBlocks.length; i++) {
    if (water.y < allBlocks[i].y) {
      allBlocks[i].cover();
    }
    allBlocks[i].draw();
  }
  if (water.y < endAxis) {
    alert('GameOver');
  }
  water.raiseWater();
}

water.draw();
startPlank.draw();
submitPlank.draw();
leapingPlank.draw();
// guyPhelps.draw();
for (let i = 0; i < allBlocks.length; i++) {
  allBlocks[i].draw();
}

setInterval(draw, 200);
