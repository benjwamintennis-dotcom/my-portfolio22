let rstroke;
let fattempts = 0;

let light1 = false;
let light2 = false;
let light3 = false;
let light4 = false;
let light5 = false;
let light6 = false;

let radius = 50;

function setup() {
  createCanvas(400, 400);
  rstroke = random(1, 10);
}

function draw() {
  background("darkgreen");
  strokeWeight(rstroke);

  fill("white");

  rect(50, 50, 50);
  rect(150, 50, 50);
  rect(250, 50, 50);
  rect(50, 150, 50);
  rect(150, 150, 50);
  rect(250, 150, 50);

  fill("black");
  textSize(10);
  text("switch 1", 57, 80);
  text("switch 2", 157, 80);
  text("switch 3", 257, 80);
  text("switch 4", 57, 180);
  text("switch 5", 157, 180);
  text("switch 6", 257, 180);

  let s1 = dist(mouseX, mouseY, 75, 75);
  let s2 = dist(mouseX, mouseY, 175, 75);
  let s3 = dist(mouseX, mouseY, 275, 75);
  let s4 = dist(mouseX, mouseY, 75, 175);
  let s5 = dist(mouseX, mouseY, 175, 175);
  let s6 = dist(mouseX, mouseY, 275, 175);

  if (s1 < radius && mouseIsPressed) {
    toggleSwitch1();
  }

  if (s2 < radius && mouseIsPressed) {
    toggleSwitch2();
  }

  if (s3 < radius && mouseIsPressed) {
    toggleSwitch3();
  }

  if (s4 < radius && mouseIsPressed) {
    toggleSwitch4();
  }

  if (s5 < radius && mouseIsPressed) {
    toggleSwitch5();
  }

  if (s6 < radius && mouseIsPressed) {
    toggleSwitch6();
  }

  light1 ? fill("yellow") : fill("white");
  circle(75, 250, 50);

  light2 ? fill("yellow") : fill("white");
  circle(175, 250, 50);

  light3 ? fill("yellow") : fill("white");
  circle(275, 250, 50);

  light4 ? fill("yellow") : fill("white");
  circle(75, 350, 50);

  light5 ? fill("yellow") : fill("white");
  circle(175, 350, 50);

  light6 ? fill("yellow") : fill("white");
  circle(275, 350, 50);

  fill("black");
  text("light 1", 60, 260);
  text("light 2", 160, 260);
  text("light 3", 260, 260);
  text("light 4", 60, 360);
  text("light 5", 160, 360);
  text("light 6", 260, 360);

  if (light1 && light2 && light3 && light4 && light5 && light6) {
    background("green");
    fill("white");
    textSize(40);
    text("YOU WIN!", 105, 200);
  }

  if (mouseIsPressed) {
    fattempts++;
  }

  if (fattempts >= 200) {
    background("red");
    fill("white");
    textSize(40);
    text("YOU FAIL!", 95, 200);
  }
}

function toggleSwitch1() {
  light1 = !light1;
}

function toggleSwitch2() {
  light2 = !light2;
  light4 = !light4;
}

function toggleSwitch3() {
  light3 = !light3;
  light5 = !light5;
}

function toggleSwitch4() {
  light4 = !light4;
  light6 = !light6;
}

function toggleSwitch5() {
  light5 = !light5;
  light1 = !light1;
  light2 = !light2;
}

function toggleSwitch6() {
  light6 = !light6;
  light2 = !light2;
  light3 = !light3;
}