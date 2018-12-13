/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/backdrop.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/backdrop.js":
/*!*************************!*\
  !*** ./src/backdrop.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Water = __webpack_require__(/*! ./water */ "./src/water.js");
const LetterBlock = __webpack_require__(/*! ./letterblock */ "./src/letterblock.js");
const Plank = __webpack_require__(/*! ./plank */ "./src/plank.js");
const GuyPhelps = __webpack_require__(/*! ./characters/guy_phelps */ "./src/characters/guy_phelps.js");
const Controller = __webpack_require__(/*! ./controller */ "./src/controller.js");
const WordList = __webpack_require__(/*! ./wordlist */ "./src/wordlist.js");


let confirmedWords = document.getElementById('wordlist');
let canvas = document.getElementById('backdrop');
let score = document.getElementById('score-total');
let fragment = document.getElementById('fragment');
let context = canvas.getContext('2d');
let endAxis = 135;


let wordList = new WordList;

let guyPhelps = new GuyPhelps(canvas, context, 'Guy Phelps', 100, 770);
let controller = new Controller(guyPhelps);
score.innerText = guyPhelps.score;

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
  confirmedWords = document.getElementById('wordlist');
  canvas = document.getElementById('backdrop');
  score = document.getElementById('score-total');
  fragment = document.getElementById('fragment');
  context = canvas.getContext('2d');
  endAxis = 135;

  wordList = new WordList;

  guyPhelps = new GuyPhelps(canvas, context, 'Guy Phelps', 100, 770);
  controller = new Controller(guyPhelps);
  score.innerText = guyPhelps.score;

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
    location.reload();
  }
  if (guyPhelps.x === 520 && guyPhelps.y === 84) {
    submitScore(guyPhelps);
    for (let i = 0; i < allBlocks.length; i++) {
      allBlocks[i].uncover();
    }
  }
  fragment.innerText = guyPhelps.word.join('');
  water.raiseWater();
  window.requestAnimationFrame(draw);
}

function submitScore(player) {
  const word = player.word.join('');
  let newScore = 0;
  for (let i = 0; i < player.values.length; i++) {
    newScore += player.values[i]
  }
  if (wordList.words[word.toLowerCase()]) {
    player.score += (newScore * word.length);
    player.resetWords(word);
    let nextWord = document.createElement('li');
    nextWord.innerText = word;
    confirmedWords.append(nextWord);

    score.innerText = player.score;
    wordList.words[word.toLowerCase()] = false;
  }
  player.clearValues();
  return;
}


window.requestAnimationFrame(draw);
window.addEventListener('keydown', controller.keyListener);
window.addEventListener('keyup', controller.keyListener);


/***/ }),

/***/ "./src/characters/guy_phelps.js":
/*!**************************************!*\
  !*** ./src/characters/guy_phelps.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Player = __webpack_require__(/*! ../player */ "./src/player.js");

class GuyPhelps extends Player {
  constructor(canvas, context, name, x, y) {
    super(canvas, context, name, x, y);
    this.width = 30;
    this.height = 50;
  }

  draw() {
    this.context.beginPath();
    this.context.lineWidth = '3';
    this.context.fillStyle = 'red';
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.fill();
    this.context.closePath();
    // this.context.drawImage(this.img, this.startX, this.startY);
  }

  // bottom() {
  //   // this.height
  // }

  gravity() {
    this.yVelocity += 1.5;
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.xVelocity *= 0.9;
    this.yVelocity *= 0.9;
  }
}

module.exports = GuyPhelps;


/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
      case 73:
      // case 38: // up
        this.up = keyState;
        break;
      case 74:
      // case 37: // left
        this.left = keyState;
        break;
      case 76:
      // case 39: //right
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


/***/ }),

/***/ "./src/letterblock.js":
/*!****************************!*\
  !*** ./src/letterblock.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class LetterBlock {
  constructor(player, letter, x, y, context) {
    this.player = player;
    this.color = 'orange';
    this.context = context;
    this.x = x;
    this.y = y;
    this.letter = letter.toUpperCase();
    this.value = this.values()[letter.toUpperCase()];
    this.width = 50;
    this.height = 50;
    this.timer = 1;
    this.landed = false;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.strokeStyle = 'black';
    this.context.lineWidth = '6';
    this.context.shadowBlur = 0;
    this.context.rect(this.x, this.y, this.width, this.height);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();
    this.drawLetter();
  }

  drawLetter() {
    this.context.beginPath();
    this.context.font = 'bold 30px Arial';
    this.context.fillStyle = 'white';
    this.context.fillText(
      this.letter,
      this.x + this.letterPos()[this.letter],
      this.y + 35
    );
    this.context.closePath();
  }

  cover() {
    this.color = 'grey';
  }

  uncover() {
    this.color = 'orange';
    this.landed = false;
  }

  checkTimer(){
    if (this.timer === 50 && this.color === 'orange') {
      this.cover();
      this.player.addLetter(this.letter, this.value);
      console.log(this.player.word.join(''));
      this.timer = 0;
    }
  }

  topCollisionCheck() {
    if (this.player.x + this.player.width >= this.x && this.player.x <= this.x + this.width) {
      if (this.player.y < this.y) {
        if (this.y - this.player.y <= this.player.height) {
          this.player.jumping = false;
          this.player.y = this.y - this.player.height;
          this.player.yVelocity = 0;
          this.timer++;
          if (this.landed === false) {
            this.landed = true;
          }
          return;
        }
      }
    }
    this.landed = false;
    this.timer = 0;
  }

  letterPos() {
    return {
      A: 14,
      B: 14,
      C: 14,
      D: 14,
      E: 14,
      F: 15,
      G: 13,
      H: 14,
      I: 20,
      J: 16,
      K: 14,
      L: 16,
      M: 13,
      N: 15,
      O: 13,
      P: 15,
      Q: 13,
      R: 13,
      S: 15,
      T: 15.5,
      U: 14,
      V: 15,
      W: 11,
      X: 14,
      Y: 14.5,
      Z: 15,
    };
  }

  values() {
    return {
      A: 1,
      B: 3,
      C: 3,
      D: 2,
      E: 1,
      F: 4,
      G: 2,
      H: 4,
      I: 1,
      J: 8,
      K: 5,
      L: 1,
      M: 3,
      N: 1,
      O: 1,
      P: 3,
      Q: 10,
      R: 1,
      S: 1,
      T: 1,
      U: 1,
      V: 4,
      W: 4,
      X: 8,
      Y: 4,
      Z: 10,
    };
  }
}

module.exports = LetterBlock;


/***/ }),

/***/ "./src/plank.js":
/*!**********************!*\
  !*** ./src/plank.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Plank {
  constructor(side, player, context, x, y, width) {
    this.side = side;
    this.player = player;
    this.context = context;
    this.x = x;
    this.y = y;
    this.width = width;
  }

  draw() {
    this.context.beginPath();
    this.context.shadowBlur = 0;
    this.context.moveTo(this.x, this.y);
    this.context.lineTo(this.x + this.width, this.y);
    this.context.lineWidth = '8';
    this.context.strokeStyle = '#A85331';
    this.context.stroke();
    this.context.closePath();
  }

  collideCheck() {
    if (this.side === "left") {
      if (this.x <= this.player.x && this.player.x < this.x + this.width) {
        if (this.player.y + this.player.height >= this.y) {
          this.player.jumping = false;
          this.player.y = this.y - this.player.height;
          this.player.yVelocity = 0;
        }
      }
    } else {
      if (this.player.x + this.player.width >= this.x) {
        if (this.player.y < this.y && this.y - this.player.y <= this.player.height) {
          this.player.jumping = false;
          this.player.y = this.y - this.player.height;
          this.player.yVelocity = 0;
        }
      }
    }
  }
}

module.exports = Plank;


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

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

  addLetter(letter, value){
    this.word.push(letter);
    this.values.push(value);
  }

  clearValues() {
    this.word = [];
    this.values = [];
  }

  resetWords(word) {
    if (!word) { return null; }
    this.wordList.push(word);
    this.word = [];
    this.values = [];
  }
}

module.exports = Player;


/***/ }),

/***/ "./src/water.js":
/*!**********************!*\
  !*** ./src/water.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Water {
  constructor(context, canvas) {
    this.context = context;
    this.canvas = canvas;
    this.x = 0;
    this.y = 900;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = '#009BFE';
    this.context.shadowColor = '#009BFE';
    this.context.shadowBlur = 13;
    this.context.fillRect(this.x, this.y, this.canvas.width, this.canvas.height);
  }

  raiseWater() {
    const waterCurrent = (this.y >= this.canvas.height / 2 ? (900 * 0.0001) :  (1200 * 0.0001))
    this.y -= waterCurrent;
  }
}

module.exports = Water;


/***/ }),

/***/ "./src/wordlist.js":
/*!*************************!*\
  !*** ./src/wordlist.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class WordList {
  constructor() {
    this.words =
    {
    aced: true,
    acers: true,
    aces: true,
    ache: true,
    ached: true,
    acher: true,
    aches: true,
    achier: true,
    achiest: true,
    aching: true,
    acid: true,
    acids: true,
    acing: true,
    acne: true,
    acned: true,
    acnes: true,
    acre: true,
    acres: true,
    acrid: true,
    acted: true,
    acter: true,
    actin: true,
    acting: true,
    actins: true,
    active: true,
    activer: true,
    actives: true,
    acts: true,
    adhering: true,
    advent: true,
    advents: true,
    advert: true,
    adverting: true,
    adverts: true,
    advice: true,
    advices: true,
    advise: true,
    adviser: true,
    aged: true,
    agent: true,
    agents: true,
    ages: true,
    agin: true,
    agrin: true,
    aide: true,
    aider: true,
    aiders: true,
    aides: true,
    aids: true,
    aigret: true,
    aigrets: true,
    aired: true,
    airs: true,
    aitch: true,
    aitches: true,
    ands: true,
    anger: true,
    angers: true,
    angriest: true,
    angst: true,
    angstier: true,
    anhedric: true,
    anise: true,
    ante: true,
    anther: true,
    antherid: true,
    antherids: true,
    anthers: true,
    antic: true,
    antics: true,
    ants: true,
    antsier: true,
    arced: true,
    arch: true,
    arched: true,
    arches: true,
    arching: true,
    archings: true,
    archive: true,
    archived: true,
    archives: true,
    arcing: true,
    arcs: true,
    arcsine: true,
    ardent: true,
    ares: true,
    argent: true,
    argentic: true,
    argents: true,
    arid: true,
    aridest: true,
    aright: true,
    arise: true,
    arisen: true,
    arsenic: true,
    arshin: true,
    arshine: true,
    arts: true,
    ascend: true,
    ascent: true,
    ashed: true,
    ashen: true,
    asher: true,
    ashier: true,
    ashing: true,
    aside: true,
    aster: true,
    astern: true,
    astir: true,
    astride: true,
    aven: true,
    avens: true,
    aver: true,
    avers: true,
    avert: true,
    averting: true,
    averts: true,
    avid: true,
    avider: true,
    avidest: true,
    cadet: true,
    cadets: true,
    cadge: true,
    cadre: true,
    cads: true,
    cage: true,
    caged: true,
    cages: true,
    cagier: true,
    cagiest: true,
    cairn: true,
    cairned: true,
    cairns: true,
    candies: true,
    cane: true,
    caned: true,
    caner: true,
    caners: true,
    canes: true,
    canid: true,
    canids: true,
    canister: true,
    cans: true,
    canst: true,
    cant: true,
    canted: true,
    canter: true,
    canters: true,
    cantred: true,
    cantreds: true,
    cants: true,
    card: true,
    carding: true,
    cards: true,
    care: true,
    cared: true,
    cares: true,
    caret: true,
    carets: true,
    caries: true,
    caring: true,
    carnies: true,
    cars: true,
    cart: true,
    carted: true,
    carting: true,
    cartings: true,
    carts: true,
    carve: true,
    carved: true,
    carves: true,
    carving: true,
    carvings: true,
    case: true,
    cased: true,
    casein: true,
    cash: true,
    cashed: true,
    casher: true,
    cashier: true,
    cashing: true,
    casing: true,
    cast: true,
    caste: true,
    casted: true,
    caster: true,
    casting: true,
    cater: true,
    catering: true,
    caterings: true,
    caters: true,
    cats: true,
    cave: true,
    caved: true,
    caver: true,
    cavern: true,
    caverns: true,
    cavers: true,
    caves: true,
    caving: true,
    ceasing: true,
    cedar: true,
    cedars: true,
    cedi: true,
    ceding: true,
    cedis: true,
    cent: true,
    cents: true,
    cering: true,
    certain: true,
    certs: true,
    cervid: true,
    cervids: true,
    chad: true,
    chagrin: true,
    chagrined: true,
    chagrins: true,
    chain: true,
    chained: true,
    chainer: true,
    chainers: true,
    chains: true,
    chair: true,
    chaired: true,
    chairs: true,
    chaise: true,
    change: true,
    changed: true,
    changer: true,
    changers: true,
    changes: true,
    chant: true,
    chanted: true,
    chanter: true,
    chanters: true,
    chants: true,
    char: true,
    chard: true,
    chards: true,
    charge: true,
    charged: true,
    charges: true,
    chariest: true,
    chars: true,
    chart: true,
    charted: true,
    charting: true,
    chartings: true,
    charts: true,
    chase: true,
    chased: true,
    chaser: true,
    chasing: true,
    chaste: true,
    chasten: true,
    chaster: true,
    chat: true,
    chats: true,
    cheat: true,
    cheating: true,
    cheats: true,
    chert: true,
    cherts: true,
    chest: true,
    chide: true,
    chides: true,
    chin: true,
    china: true,
    chinas: true,
    chins: true,
    chis: true,
    chiv: true,
    chive: true,
    chives: true,
    chivs: true,
    christen: true,
    cider: true,
    ciders: true,
    cigar: true,
    cigars: true,
    cinder: true,
    cinders: true,
    cistern: true,
    cite: true,
    cited: true,
    citer: true,
    citers: true,
    cites: true,
    cither: true,
    cithern: true,
    citherns: true,
    cithers: true,
    civet: true,
    civets: true,
    cnida: true,
    cnidae: true,
    cnidas: true,
    crag: true,
    crags: true,
    crane: true,
    craned: true,
    cranes: true,
    crash: true,
    crashdive: true,
    crashed: true,
    crashing: true,
    crate: true,
    crated: true,
    crates: true,
    crating: true,
    crave: true,
    craved: true,
    craves: true,
    craving: true,
    cravings: true,
    creasing: true,
    creating: true,
    credit: true,
    credits: true,
    crest: true,
    cresting: true,
    cretin: true,
    cretins: true,
    cried: true,
    cries: true,
    cringe: true,
    cringed: true,
    cringes: true,
    crista: true,
    cristae: true,
    dacite: true,
    dacites: true,
    dance: true,
    dancer: true,
    dancers: true,
    dances: true,
    danger: true,
    dangers: true,
    danish: true,
    dare: true,
    dares: true,
    daring: true,
    darn: true,
    darns: true,
    dart: true,
    darting: true,
    darts: true,
    dash: true,
    dasher: true,
    dashing: true,
    date: true,
    dater: true,
    daters: true,
    dates: true,
    dating: true,
    dative: true,
    davit: true,
    davits: true,
    deair: true,
    deairs: true,
    dean: true,
    deans: true,
    dear: true,
    dears: true,
    dearth: true,
    dearths: true,
    deash: true,
    deashing: true,
    death: true,
    deaths: true,
    deaving: true,
    decant: true,
    decants: true,
    decart: true,
    degarnish: true,
    degas: true,
    dehair: true,
    deign: true,
    deist: true,
    denar: true,
    denars: true,
    dens: true,
    dent: true,
    dents: true,
    deraign: true,
    dervish: true,
    descant: true,
    design: true,
    destain: true,
    detach: true,
    detaching: true,
    detain: true,
    detains: true,
    detrain: true,
    detrains: true,
    deva: true,
    devas: true,
    deviant: true,
    deviants: true,
    diarch: true,
    dice: true,
    dicer: true,
    dicers: true,
    dices: true,
    dies: true,
    diet: true,
    diets: true,
    digest: true,
    digs: true,
    dinar: true,
    dinars: true,
    dine: true,
    diner: true,
    diners: true,
    dines: true,
    ding: true,
    dinger: true,
    dings: true,
    dins: true,
    dint: true,
    dints: true,
    dire: true,
    direct: true,
    directs: true,
    direst: true,
    dirge: true,
    dirges: true,
    dirt: true,
    dirts: true,
    disc: true,
    discant: true,
    discanter: true,
    discern: true,
    discharge: true,
    disgrace: true,
    dish: true,
    dishrag: true,
    disrate: true,
    distance: true,
    ditch: true,
    ditcher: true,
    ditchers: true,
    ditches: true,
    dither: true,
    dithers: true,
    diva: true,
    divan: true,
    divans: true,
    divas: true,
    dive: true,
    diver: true,
    divers: true,
    divert: true,
    diverts: true,
    dives: true,
    divest: true,
    drag: true,
    dragnet: true,
    dragnets: true,
    drags: true,
    drain: true,
    drains: true,
    drastic: true,
    dreg: true,
    dregs: true,
    drench: true,
    dries: true,
    driest: true,
    drive: true,
    driven: true,
    drives: true,
    each: true,
    earn: true,
    earns: true,
    ears: true,
    earth: true,
    earthing: true,
    earths: true,
    easing: true,
    east: true,
    eating: true,
    eats: true,
    echidna: true,
    echidnas: true,
    edict: true,
    edicts: true,
    edit: true,
    edits: true,
    eight: true,
    eights: true,
    enact: true,
    enacts: true,
    ends: true,
    enrich: true,
    eras: true,
    erasing: true,
    ergs: true,
    eschar: true,
    etas: true,
    etch: true,
    etching: true,
    etchings: true,
    ethic: true,
    ethics: true,
    ethnic: true,
    ethnics: true,
    evading: true,
    evict: true,
    evicts: true,
    gain: true,
    gained: true,
    gainer: true,
    gainers: true,
    gains: true,
    gait: true,
    gaited: true,
    gaiter: true,
    gaiters: true,
    gaits: true,
    gander: true,
    ganders: true,
    ganev: true,
    ganevs: true,
    ganister: true,
    gantries: true,
    garden: true,
    gardens: true,
    garish: true,
    garnet: true,
    garnets: true,
    garnish: true,
    garnished: true,
    gash: true,
    gashed: true,
    gasher: true,
    gastric: true,
    gastrin: true,
    gate: true,
    gated: true,
    gates: true,
    gather: true,
    gathers: true,
    gave: true,
    gear: true,
    gears: true,
    geisha: true,
    gent: true,
    gents: true,
    gets: true,
    giant: true,
    giants: true,
    gins: true,
    gird: true,
    girds: true,
    girn: true,
    girned: true,
    girns: true,
    girth: true,
    girths: true,
    gist: true,
    give: true,
    given: true,
    givens: true,
    giver: true,
    givers: true,
    gives: true,
    gnar: true,
    gnars: true,
    gnash: true,
    gnashed: true,
    gnasher: true,
    gnat: true,
    gnats: true,
    grace: true,
    graced: true,
    graces: true,
    grade: true,
    grades: true,
    gradient: true,
    gradients: true,
    grads: true,
    grain: true,
    grained: true,
    grains: true,
    grand: true,
    grandest: true,
    grands: true,
    granite: true,
    granites: true,
    grant: true,
    granted: true,
    grants: true,
    grate: true,
    grated: true,
    grates: true,
    gratis: true,
    grave: true,
    graved: true,
    graven: true,
    graves: true,
    gravest: true,
    gravid: true,
    gravies: true,
    great: true,
    greats: true,
    grid: true,
    grids: true,
    grin: true,
    grinch: true,
    grinches: true,
    grind: true,
    grinds: true,
    grins: true,
    grist: true,
    grit: true,
    grits: true,
    hades: true,
    hadst: true,
    hagride: true,
    hagrides: true,
    hags: true,
    hair: true,
    haired: true,
    hairnet: true,
    hairnets: true,
    hairs: true,
    hand: true,
    hander: true,
    handers: true,
    handier: true,
    handiest: true,
    handrest: true,
    hands: true,
    handset: true,
    hang: true,
    hanged: true,
    hanger: true,
    hangers: true,
    hangs: true,
    hard: true,
    harden: true,
    hardens: true,
    hardest: true,
    hardiest: true,
    hards: true,
    hare: true,
    hared: true,
    hares: true,
    harvest: true,
    harvesting: true,
    haste: true,
    hasted: true,
    hasten: true,
    hastier: true,
    hate: true,
    hated: true,
    hater: true,
    haters: true,
    hates: true,
    hating: true,
    hatred: true,
    hatreds: true,
    hats: true,
    have: true,
    haven: true,
    havens: true,
    haves: true,
    having: true,
    head: true,
    heading: true,
    headings: true,
    heads: true,
    hear: true,
    heard: true,
    hearing: true,
    hearings: true,
    hears: true,
    heart: true,
    hearts: true,
    heat: true,
    heating: true,
    heats: true,
    heaving: true,
    heir: true,
    heirs: true,
    heist: true,
    hens: true,
    herd: true,
    herding: true,
    herds: true,
    hernia: true,
    hernias: true,
    hers: true,
    hics: true,
    hide: true,
    hider: true,
    hiders: true,
    hides: true,
    hind: true,
    hinder: true,
    hinders: true,
    hinds: true,
    hinge: true,
    hinged: true,
    hinges: true,
    hint: true,
    hinted: true,
    hinter: true,
    hints: true,
    hire: true,
    hired: true,
    hires: true,
    hits: true,
    hive: true,
    hived: true,
    hiver: true,
    hives: true,
    iced: true,
    icer: true,
    icers: true,
    ices: true,
    idea: true,
    ideas: true,
    idents: true,
    ides: true,
    incar: true,
    incase: true,
    incased: true,
    incest: true,
    inch: true,
    inched: true,
    incher: true,
    inchers: true,
    inches: true,
    inert: true,
    ingest: true,
    ingrate: true,
    ingrates: true,
    inreach: true,
    insect: true,
    insert: true,
    inset: true,
    instar: true,
    instead: true,
    inter: true,
    invade: true,
    invader: true,
    invaders: true,
    invades: true,
    invect: true,
    invects: true,
    invert: true,
    inverts: true,
    invest: true,
    irate: true,
    ired: true,
    ires: true,
    itch: true,
    itched: true,
    itches: true,
    nadir: true,
    nags: true,
    naive: true,
    naiver: true,
    naivest: true,
    nares: true,
    nastier: true,
    native: true,
    natives: true,
    nave: true,
    naves: true,
    navies: true,
    near: true,
    nears: true,
    neat: true,
    nectar: true,
    nectars: true,
    neigh: true,
    neighs: true,
    nerd: true,
    nerds: true,
    nest: true,
    nets: true,
    nevi: true,
    nice: true,
    nicer: true,
    nicest: true,
    niche: true,
    niches: true,
    nicht: true,
    nigh: true,
    night: true,
    nights: true,
    nits: true,
    race: true,
    raced: true,
    races: true,
    rachet: true,
    rachides: true,
    rachis: true,
    raciest: true,
    racing: true,
    racist: true,
    radices: true,
    radish: true,
    rage: true,
    raged: true,
    rages: true,
    rags: true,
    raid: true,
    raids: true,
    rain: true,
    rained: true,
    rains: true,
    raise: true,
    raised: true,
    ranch: true,
    ranched: true,
    ranches: true,
    rancid: true,
    rancidest: true,
    rand: true,
    randiest: true,
    rands: true,
    rang: true,
    range: true,
    ranged: true,
    ranges: true,
    rangiest: true,
    ranid: true,
    ranids: true,
    rant: true,
    ranted: true,
    rants: true,
    rash: true,
    rate: true,
    rated: true,
    rates: true,
    rating: true,
    ratings: true,
    rats: true,
    rave: true,
    raved: true,
    raven: true,
    ravens: true,
    raves: true,
    ravine: true,
    ravines: true,
    raving: true,
    ravings: true,
    ravish: true,
    ravished: true,
    reach: true,
    reaching: true,
    react: true,
    reacting: true,
    reacts: true,
    read: true,
    reading: true,
    readings: true,
    reads: true,
    reagin: true,
    reast: true,
    reasting: true,
    reaving: true,
    recant: true,
    recants: true,
    recast: true,
    recasting: true,
    rechain: true,
    rechains: true,
    redact: true,
    redacting: true,
    redacts: true,
    redating: true,
    reds: true,
    regain: true,
    regains: true,
    regas: true,
    rehang: true,
    rehangs: true,
    rehid: true,
    reign: true,
    reigns: true,
    rein: true,
    reins: true,
    rend: true,
    rends: true,
    rent: true,
    rents: true,
    resaid: true,
    resand: true,
    resat: true,
    resaving: true,
    rescan: true,
    rescind: true,
    resh: true,
    reshaving: true,
    resight: true,
    resign: true,
    resin: true,
    resit: true,
    rest: true,
    restain: true,
    resting: true,
    retag: true,
    retags: true,
    retain: true,
    retains: true,
    retch: true,
    retching: true,
    retina: true,
    retinas: true,
    revs: true,
    rhetic: true,
    rice: true,
    riced: true,
    rices: true,
    rich: true,
    riches: true,
    richest: true,
    ride: true,
    rides: true,
    ridge: true,
    ridges: true,
    rids: true,
    right: true,
    righted: true,
    rights: true,
    rigs: true,
    rind: true,
    rinds: true,
    ring: true,
    ringed: true,
    rings: true,
    rinse: true,
    rinsed: true,
    rise: true,
    risen: true,
    rite: true,
    rited: true,
    rites: true,
    rive: true,
    rived: true,
    riven: true,
    rives: true,
    rivet: true,
    rivets: true,
    sachet: true,
    sacred: true,
    sadhe: true,
    sage: true,
    sager: true,
    sagier: true,
    said: true,
    saint: true,
    sainted: true,
    saith: true,
    sand: true,
    sander: true,
    sandier: true,
    sane: true,
    saner: true,
    sang: true,
    sard: true,
    sardine: true,
    sari: true,
    sarin: true,
    sate: true,
    sated: true,
    satin: true,
    sating: true,
    satire: true,
    save: true,
    saved: true,
    saver: true,
    saving: true,
    scan: true,
    scant: true,
    scanter: true,
    scantier: true,
    scar: true,
    scare: true,
    scared: true,
    scaring: true,
    scat: true,
    scathe: true,
    scathed: true,
    scathing: true,
    scent: true,
    scrag: true,
    scried: true,
    sear: true,
    search: true,
    searching: true,
    searing: true,
    seat: true,
    seating: true,
    secant: true,
    sect: true,
    sedan: true,
    sedating: true,
    seitan: true,
    send: true,
    sent: true,
    sera: true,
    serac: true,
    sering: true,
    servant: true,
    serving: true,
    seta: true,
    shade: true,
    shader: true,
    shadier: true,
    shading: true,
    shard: true,
    share: true,
    shared: true,
    sharing: true,
    shave: true,
    shaved: true,
    shaven: true,
    shaver: true,
    shaving: true,
    shear: true,
    shearing: true,
    shed: true,
    shied: true,
    shier: true,
    shin: true,
    shine: true,
    shined: true,
    shiner: true,
    shire: true,
    shirt: true,
    shirted: true,
    shiv: true,
    shiver: true,
    shred: true,
    shrine: true,
    shrined: true,
    shrive: true,
    side: true,
    sidecar: true,
    sigh: true,
    sighed: true,
    sigher: true,
    sight: true,
    sighted: true,
    sighter: true,
    sightread: true,
    sign: true,
    signed: true,
    signer: true,
    signet: true,
    since: true,
    sine: true,
    sing: true,
    singe: true,
    singed: true,
    singer: true,
    sinter: true,
    sire: true,
    sired: true,
    siren: true,
    sitar: true,
    site: true,
    sited: true,
    snag: true,
    snare: true,
    snared: true,
    snatch: true,
    snatched: true,
    snatcher: true,
    snide: true,
    snider: true,
    snit: true,
    snitch: true,
    snitched: true,
    snitcher: true,
    sringa: true,
    stag: true,
    stage: true,
    staged: true,
    stager: true,
    stagier: true,
    staid: true,
    stain: true,
    stained: true,
    stainer: true,
    stair: true,
    stance: true,
    stanch: true,
    stanched: true,
    stancher: true,
    stand: true,
    stander: true,
    star: true,
    starch: true,
    starched: true,
    starching: true,
    stare: true,
    stared: true,
    staring: true,
    starve: true,
    starved: true,
    starving: true,
    stave: true,
    staved: true,
    staving: true,
    stead: true,
    stein: true,
    stench: true,
    stern: true,
    sterna: true,
    stevia: true,
    sting: true,
    stinger: true,
    stir: true,
    stive: true,
    stived: true,
    stiver: true,
    strain: true,
    strained: true,
    strand: true,
    strange: true,
    stride: true,
    string: true,
    stringed: true,
    strive: true,
    strived: true,
    striven: true,
    tags: true,
    tangier: true,
    tans: true,
    tare: true,
    tares: true,
    tarn: true,
    tarnish: true,
    tarnished: true,
    tarns: true,
    tars: true,
    tarsi: true,
    taser: true,
    tasering: true,
    tavern: true,
    taverns: true,
    teach: true,
    teaching: true,
    teachings: true,
    tear: true,
    tearing: true,
    tears: true,
    teas: true,
    teasing: true,
    tech: true,
    techs: true,
    tend: true,
    tends: true,
    tens: true,
    tern: true,
    terns: true,
    than: true,
    their: true,
    theirs: true,
    then: true,
    thens: true,
    thin: true,
    thine: true,
    thing: true,
    things: true,
    thins: true,
    third: true,
    thirds: true,
    this: true,
    thread: true,
    threading: true,
    threads: true,
    thrice: true,
    thrive: true,
    thrived: true,
    thrives: true,
    tics: true,
    tide: true,
    tides: true,
    tied: true,
    tier: true,
    tiers: true,
    ties: true,
    tiger: true,
    tigers: true,
    tinder: true,
    tinders: true,
    tine: true,
    tinea: true,
    tined: true,
    tines: true,
    ting: true,
    tinge: true,
    tinged: true,
    tinger: true,
    tinges: true,
    tings: true,
    tins: true,
    tirade: true,
    tirades: true,
    tire: true,
    tired: true,
    tires: true,
    trace: true,
    traced: true,
    traces: true,
    tracheid: true,
    tracheids: true,
    tracing: true,
    tracings: true,
    trade: true,
    tradein: true,
    tradeins: true,
    trades: true,
    trading: true,
    tradings: true,
    tragic: true,
    train: true,
    trained: true,
    trains: true,
    trance: true,
    tranced: true,
    trances: true,
    tranche: true,
    tranches: true,
    trash: true,
    trashed: true,
    trashing: true,
    tread: true,
    treading: true,
    treads: true,
    trench: true,
    trend: true,
    trends: true,
    triad: true,
    triads: true,
    triage: true,
    triages: true,
    tried: true,
    tries: true,
    tsadi: true,
    tsar: true,
    vain: true,
    vainer: true,
    vainest: true,
    vane: true,
    vaned: true,
    vanes: true,
    vang: true,
    vanish: true,
    vanished: true,
    vanisher: true,
    vans: true,
    varices: true,
    varied: true,
    varies: true,
    varnish: true,
    varnished: true,
    vase: true,
    vast: true,
    vaster: true,
    vats: true,
    vear: true,
    vearing: true,
    vears: true,
    vegan: true,
    vegans: true,
    vein: true,
    veins: true,
    vend: true,
    vends: true,
    vent: true,
    vents: true,
    verdict: true,
    verdicts: true,
    verist: true,
    veritas: true,
    versing: true,
    vesicant: true,
    vest: true,
    vesting: true,
    vetch: true,
    vets: true,
    vicar: true,
    vicars: true,
    vice: true,
    vices: true,
    vied: true,
    vies: true,
    vinca: true,
    vincas: true,
    vine: true,
    vined: true,
    vinegar: true,
    vinegars: true,
    vines: true,
    vintage: true,
    vintages: true,
    visa: true,
    visage: true,
    viscera: true,
    vise: true,
    vised: true,
    vista: true,
    vita: true,
    vitae: true,
    vraic: true,
    vraiced: true,
    vraics: true,
    }
  }
}

module.exports = WordList;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map