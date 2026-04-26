let angle = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("green");

  translate(200, 200);
  rotate(angle);

  stroke("skyblue");
  strokeWeight(random(1, 10));

  circle(0, 0, 300);
  line(0, 0, 0, -150);
  line(0, 0, 115, -95);
  line(0, 0, 150, 0);
  line(0, 0, 115, 95);
  line(0, 0, 0, 150);
  line(0, 0, -115, -95);
  line(0, 0, -115, 95);
  line(0, 0, -150, 0);

  stroke("black");
  strokeWeight(1);

  textSize(20);
  text("Spin", 60, -20);

  textSize(15);
  text("By Jahzzar", 45, 30);

  textSize(20);
  text("Spin", -125, -20);

  textSize(15);
  text("By Jahzzar", -125, 30);

  angle += random(0.01, 1);
  frameRate(1);
}