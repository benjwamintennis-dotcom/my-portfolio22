let centerX = 200;
let centerY = 200;
let faceSize = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  frameRate(5);

  fill("black");

  // car body (roof)
  arc(
    centerX,
    centerY - faceSize * 0.2,
    faceSize * 0.56,
    faceSize * 0.56,
    PI,
    0
  );

  // left wheel
  ellipse(
    centerX - faceSize * 0.25,
    centerY - faceSize * 0.1,
    faceSize * 0.175,
    faceSize * 0.175
  );

  // right wheel
  ellipse(
    centerX + faceSize * 0.25,
    centerY - faceSize * 0.1,
    faceSize * 0.175,
    faceSize * 0.175
  );

  // movement
  centerX -= 10;   // moves left
  centerY += 20;   // moves down
  faceSize += 25;  // grows
}