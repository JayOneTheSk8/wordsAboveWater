const canvas = document.getElementById('backdrop');
const context = canvas.getContext('2d');

let waterPosX = 0;
let waterPosY = 900;

function drawWater() {
  context.beginPath();
  context.fillStyle = '#009BFE';
  context.shadowColor = '#009BFE';
  context.shadowBlur = 13;
  context.fillRect(waterPosX, waterPosY, canvas.width, canvas.height);
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawWater();
  if (waterPosY < 135) {
    alert('GameOver')
  }
  waterPosY--;
}

draw();
setInterval(draw, 200);
