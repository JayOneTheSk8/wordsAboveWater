const Water = require('./water');
const LetterBlock = require('./letterblock');
const Plank = require('./plank');
const GuyPhelps = require('./characters/guy_phelps');
const Controller = require('./controller');
const WordList = require('./wordlist');


let confirmedWords = document.querySelectorAll('#wordlist');
let canvas = document.getElementById('backdrop');
let context = canvas.getContext('2d');
let endAxis = 135;


let wordList = new WordList;

let guyPhelps = new GuyPhelps(canvas, context, 'Guy Phelps', 100, 770);
let controller = new Controller(guyPhelps);

let startPlank = new Plank("left", guyPhelps, context, 0, 820, 200);
let submitPlank = new Plank("right", guyPhelps, context, canvas.width - 80, endAxis - 1, 80);
let leapingPlank = new Plank("right", guyPhelps, context, canvas.width - 110, endAxis + 100, 130);

let a = new LetterBlock(guyPhelps, 'a', 30, 20, context);
let c = new LetterBlock(guyPhelps, 'c', 130, 550, context);
let d = new LetterBlock(guyPhelps, 'd', 50, 420, context);
let e = new LetterBlock(guyPhelps, 'e', 350, 20, context);
let g = new LetterBlock(guyPhelps, 'g', 370, 570, context);
let h = new LetterBlock(guyPhelps, 'h', 370, 290, context);
let i = new LetterBlock(guyPhelps, 'i', 200, 20, context);
let n = new LetterBlock(guyPhelps, 'n', 270, 440, context);
let r = new LetterBlock(guyPhelps, 'r', 35, 280, context);
let s = new LetterBlock(guyPhelps, 's', 120, 150, context);
let t = new LetterBlock(guyPhelps, 't', 275, 170, context);
let v = new LetterBlock(guyPhelps, 'v', 280, 700, context);

let water = new Water(context, canvas);
let allBlocks = [a, e, i, s, t, r, h, d, n, c, g, v];
let allPlanks = [startPlank, submitPlank, leapingPlank];

const initialise = () => {
  confirmedWords = document.querySelectorAll('#wordlist');
  canvas = document.getElementById('backdrop');
  context = canvas.getContext('2d');
  endAxis = 135;


  wordList = new WordList;

  guyPhelps = new GuyPhelps(canvas, context, 'Guy Phelps', 100, 770);
  controller = new Controller(guyPhelps);

  startPlank = new Plank("left", guyPhelps, context, 0, 820, 200);
  submitPlank = new Plank("right", guyPhelps, context, canvas.width - 80, endAxis - 1, 80);
  leapingPlank = new Plank("right", guyPhelps, context, canvas.width - 110, endAxis + 100, 130);

  a = new LetterBlock(guyPhelps, 'a', 30, 20, context);
  c = new LetterBlock(guyPhelps, 'c', 130, 550, context);
  d = new LetterBlock(guyPhelps, 'd', 50, 420, context);
  e = new LetterBlock(guyPhelps, 'e', 350, 20, context);
  g = new LetterBlock(guyPhelps, 'g', 370, 570, context);
  h = new LetterBlock(guyPhelps, 'h', 370, 290, context);
  i = new LetterBlock(guyPhelps, 'i', 200, 20, context);
  n = new LetterBlock(guyPhelps, 'n', 270, 440, context);
  r = new LetterBlock(guyPhelps, 'r', 35, 280, context);
  s = new LetterBlock(guyPhelps, 's', 120, 150, context);
  t = new LetterBlock(guyPhelps, 't', 275, 170, context);
  v = new LetterBlock(guyPhelps, 'v', 280, 700, context);

  water = new Water(context, canvas);
  allBlocks = [a, e, i, s, t, r, h, d, n, c, g, v];
  allPlanks = [startPlank, submitPlank, leapingPlank];
};

const draw = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  controller.buttonPressed();
  guyPhelps.gravity();
  guyPhelps.wall();
  for (let i = 0; i < allPlanks.length; i++) {
    allPlanks[i].collideCheck();
  }
  water.draw();
  for (let i = 0; i < allPlanks.length; i++) {
    allPlanks[i].draw();
  }
  guyPhelps.draw();
  for (let i = 0; i < allBlocks.length; i++) {
    if (water.y < allBlocks[i].y) {
      allBlocks[i].cover();
    }
    allBlocks[i].topCollisionCheck();
    allBlocks[i].checkTimer();
    allBlocks[i].draw();
  }
  if (water.y < endAxis || guyPhelps.y + guyPhelps.height >= water.y + 7) {
    alert("YOU LOSE!")
    initialise();
  }
  if (guyPhelps.x === 520 && guyPhelps.y === 84) {
    submitScore(guyPhelps);
    for (let i = 0; i < allBlocks.length; i++) {
      allBlocks[i].uncover();
    }
  }
  water.raiseWater();
  window.requestAnimationFrame(draw);
}

function submitScore(player) {
  const word = player.word.join('');
  let score = 0;
  for (let i = 0; i < player.values.length; i++) {
    score += player.values[i]
  }
  if (wordList.words[word.toLowerCase()]) {
    player.score += (score * word.length);
    player.resetWords(word);
    console.log(player.score, player.wordList);
    wordList.words[word.toLowerCase()] = false;
  }
  player.clearValues();
  return;
}


window.requestAnimationFrame(draw);
window.addEventListener('keydown', controller.keyListener);
window.addEventListener('keyup', controller.keyListener);
