// ============ GLOBALS ============
let x = 50;
let y = 50;
let attempts = 1;
let canMove = true;
let currentQuestion = 0;
let correct = 0;
let level = 1;

// ============ SETUP ============
function setup() {
  createCanvas(500, 600);
  background(200);
}

// ============ DRAW ============
function draw() {
  if (level === 1) {
    drawLevel1();
  } else if (level === 2) {
    drawLevel2();
  }
}

// ============ LEVEL 1 ============
function drawLevel1() {
  if (x === 50 && y === 50) {
    canMove = true;
  }

  background(50, 80, 110);

  fill(0, 200, 0);
  noStroke();
  square(430, 40, 40);

  fill(0);
  rect(120, 0, 20, 250);
  rect(120, 320, 20, 80);
  rect(240, 0, 20, 140);
  rect(240, 210, 20, 190);
  rect(360, 0, 20, 250);
  rect(360, 320, 20, 80);

  if (canMove && currentQuestion === 0) {
    if (keyIsDown(LEFT_ARROW)) {
      x -= 1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x += 1;
    }
    if (keyIsDown(UP_ARROW)) {
      y -= 1;
    }
    if (keyIsDown(DOWN_ARROW)) {
      y += 1;
    }
  }

  fill(255, 0, 0);
  noStroke();
  circle(x, y, 10);

  fill(255);
  textSize(14);
  text("Attempts: " + attempts, 320, 20);
  text("Level: 1", 30, 20);
  text("Correct: " + correct, 30, 40);

  if (x === 50 && y === 50) {
    textSize(13);
    text("Use arrow keys", 30, 450);
    text("Answer 3 questions and go to green", 30, 470);
  }

  if (x < 10 || x > 490 || y < 10 || y > 390) {
    x = 50;
    y = 50;
    attempts++;
  }

  if (x > 120 && x < 140 && y > 0 && y < 250) {
    x = 50;
    y = 50;
    attempts++;
  }
  if (x > 120 && x < 140 && y > 320 && y < 400) {
    x = 50;
    y = 50;
    attempts++;
  }

  if (x > 240 && x < 260 && y > 0 && y < 140) {
    x = 50;
    y = 50;
    attempts++;
  }
  if (x > 240 && x < 260 && y > 210 && y < 400) {
    x = 50;
    y = 50;
    attempts++;
  }

  if (x > 360 && x < 380 && y > 0 && y < 250) {
    x = 50;
    y = 50;
    attempts++;
  }
  if (x > 360 && x < 380 && y > 320 && y < 400) {
    x = 50;
    y = 50;
    attempts++;
  }

  if (x > 60 && x < 110 && y > 260 && y < 310 && correct === 0) {
    currentQuestion = 1;
    canMove = false;
  }

  if (x > 170 && x < 220 && y > 150 && y < 200 && correct === 1) {
    currentQuestion = 2;
    canMove = false;
  }

  if (x > 280 && x < 340 && y > 260 && y < 310 && correct === 2) {
    currentQuestion = 3;
    canMove = false;
  }

  if (currentQuestion === 1) {
    fill(30, 30, 30, 220);
    noStroke();
    rect(60, 430, 380, 140, 12);

    fill(255);
    textSize(14);
    text("What is 5 + 7?", 85, 460);
    textSize(13);
    text("A) 10", 85, 490);
    text("B) 12", 210, 490);
    text("C) 14", 85, 515);
    text("D) 16", 210, 515);
    text("Press A B C or D", 85, 545);
  }

  if (currentQuestion === 2) {
    fill(30, 30, 30, 220);
    noStroke();
    rect(60, 430, 380, 140, 12);

    fill(255);
    textSize(14);
    text("Which one is a mammal?", 85, 460);
    textSize(13);
    text("A) Shark", 85, 490);
    text("B) Frog", 210, 490);
    text("C) Dolphin", 85, 515);
    text("D) Trout", 210, 515);
    text("Press A B C or D", 85, 545);
  }

  if (currentQuestion === 3) {
    fill(30, 30, 30, 220);
    noStroke();
    rect(60, 430, 380, 140, 12);

    fill(255);
    textSize(14);
    text("Blue and yellow make what color?", 85, 460);
    textSize(13);
    text("A) Green", 85, 490);
    text("B) Orange", 210, 490);
    text("C) Red", 85, 515);
    text("D) Purple", 210, 515);
    text("Press A B C or D", 85, 545);
  }

  if (x > 430 && x < 470 && y > 40 && y < 80 && correct === 3) {
    canMove = false;
    currentQuestion = 100;
  }

  if (currentQuestion === 100) {
    fill(0, 200, 0);
    noStroke();
    rect(100, 160, 300, 120, 15);

    fill(0);
    textSize(24);
    text("Level 1 Complete", 135, 210);
    textSize(15);
    text("Press any arrow key", 170, 245);
  }
}

// ============ LEVEL 2 ============
function drawLevel2() {
  if (x === 50 && y === 50) {
    canMove = true;
  }

  background(20, 35, 55);

  fill(0, 200, 0);
  noStroke();
  square(430, 340, 40);

  fill(0);
  rect(100, 0, 20, 170);
  rect(100, 240, 20, 160);
  rect(220, 80, 20, 320);
  rect(340, 0, 20, 170);
  rect(340, 240, 20, 160);

  if (canMove && currentQuestion === 0) {
    if (keyIsDown(LEFT_ARROW)) {
      x -= 1;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x += 1;
    }
    if (keyIsDown(UP_ARROW)) {
      y -= 1;
    }
    if (keyIsDown(DOWN_ARROW)) {
      y += 1;
    }
  }

  fill(255, 0, 0);
  noStroke();
  circle(x, y, 10);

  fill(255);
  textSize(14);
  text("Attempts: " + attempts, 320, 20);
  text("Level: 2", 30, 20);
  text("Correct: " + correct, 30, 40);

  if (x === 50 && y === 50) {
    textSize(13);
    text("Level 2", 30, 450);
    text("Answer 3 questions and go to green", 30, 470);
  }

  if (x < 10 || x > 490 || y < 10 || y > 390) {
    x = 50;
    y = 50;
    attempts++;
  }

  if (x > 100 && x < 120 && y > 0 && y < 170) {
    x = 50;
    y = 50;
    attempts++;
  }
  if (x > 100 && x < 120 && y > 240 && y < 400) {
    x = 50;
    y = 50;
    attempts++;
  }

  if (x > 220 && x < 240 && y > 80 && y < 400) {
    x = 50;
    y = 50;
    attempts++;
  }

  if (x > 340 && x < 360 && y > 0 && y < 170) {
    x = 50;
    y = 50;
    attempts++;
  }
  if (x > 340 && x < 360 && y > 240 && y < 400) {
    x = 50;
    y = 50;
    attempts++;
  }

  if (x > 50 && x < 90 && y > 180 && y < 220 && correct === 0) {
    currentQuestion = 4;
    canMove = false;
  }

  if (x > 150 && x < 200 && y > 30 && y < 70 && correct === 1) {
    currentQuestion = 5;
    canMove = false;
  }

  if (x > 260 && x < 320 && y > 180 && y < 220 && correct === 2) {
    currentQuestion = 6;
    canMove = false;
  }

  if (currentQuestion === 4) {
    fill(30, 30, 30, 220);
    noStroke();
    rect(60, 430, 380, 140, 12);

    fill(255);
    textSize(14);
    text("Which planet is the Red Planet?", 85, 460);
    textSize(13);
    text("A) Earth", 85, 490);
    text("B) Mars", 210, 490);
    text("C) Venus", 85, 515);
    text("D) Neptune", 210, 515);
    text("Press A B C or D", 85, 545);
  }

  if (currentQuestion === 5) {
    fill(30, 30, 30, 220);
    noStroke();
    rect(60, 430, 380, 140, 12);

    fill(255);
    textSize(14);
    text("What is 9 x 8?", 85, 460);
    textSize(13);
    text("A) 72", 85, 490);
    text("B) 64", 210, 490);
    text("C) 81", 85, 515);
    text("D) 70", 210, 515);
    text("Press A B C or D", 85, 545);
  }

  if (currentQuestion === 6) {
    fill(30, 30, 30, 220);
    noStroke();
    rect(60, 430, 380, 140, 12);

    fill(255);
    textSize(14);
    text("Which ocean is the largest?", 85, 460);
    textSize(13);
    text("A) Atlantic", 85, 490);
    text("B) Indian", 210, 490);
    text("C) Arctic", 85, 515);
    text("D) Pacific", 210, 515);
    text("Press A B C or D", 85, 545);
  }

  if (x > 430 && x < 470 && y > 340 && y < 380 && correct === 3) {
    canMove = false;
    currentQuestion = 200;
  }

  if (currentQuestion === 200) {
    fill(0, 200, 0);
    noStroke();
    rect(100, 160, 300, 120, 15);

    fill(0);
    textSize(24);
    text("You Finished", 175, 210);
    textSize(15);
    text("Press any arrow key", 170, 245);
  }
}

// ============ KEY PRESSED ============
function keyPressed() {
  if (currentQuestion === 1) {
    if (key === "b" || key === "B") {
      canMove = true;
      currentQuestion = 0;
      correct = 1;
    } else if (key === "a" || key === "A" || key === "c" || key === "C" || key === "d" || key === "D") {
      x = 50;
      y = 50;
      attempts++;
      canMove = true;
      currentQuestion = 0;
      correct = 0;
    }
  }

  if (currentQuestion === 2) {
    if (key === "c" || key === "C") {
      canMove = true;
      currentQuestion = 0;
      correct = 2;
    } else if (key === "a" || key === "A" || key === "b" || key === "B" || key === "d" || key === "D") {
      x = 50;
      y = 50;
      attempts++;
      canMove = true;
      currentQuestion = 0;
      correct = 0;
    }
  }

  if (currentQuestion === 3) {
    if (key === "a" || key === "A") {
      canMove = true;
      currentQuestion = 0;
      correct = 3;
    } else if (key === "b" || key === "B" || key === "c" || key === "C" || key === "d" || key === "D") {
      x = 50;
      y = 50;
      attempts++;
      canMove = true;
      currentQuestion = 0;
      correct = 0;
    }
  }

  if (currentQuestion === 4) {
    if (key === "b" || key === "B") {
      canMove = true;
      currentQuestion = 0;
      correct = 1;
    } else if (key === "a" || key === "A" || key === "c" || key === "C" || key === "d" || key === "D") {
      x = 50;
      y = 50;
      attempts++;
      canMove = true;
      currentQuestion = 0;
      correct = 0;
    }
  }

  if (currentQuestion === 5) {
    if (key === "a" || key === "A") {
      canMove = true;
      currentQuestion = 0;
      correct = 2;
    } else if (key === "b" || key === "B" || key === "c" || key === "C" || key === "d" || key === "D") {
      x = 50;
      y = 50;
      attempts++;
      canMove = true;
      currentQuestion = 0;
      correct = 0;
    }
  }

  if (currentQuestion === 6) {
    if (key === "d" || key === "D") {
      canMove = true;
      currentQuestion = 0;
      correct = 3;
    } else if (key === "a" || key === "A" || key === "b" || key === "B" || key === "c" || key === "C") {
      x = 50;
      y = 50;
      attempts++;
      canMove = true;
      currentQuestion = 0;
      correct = 0;
    }
  }

  if (currentQuestion === 100) {
    if (
      keyCode === LEFT_ARROW ||
      keyCode === RIGHT_ARROW ||
      keyCode === UP_ARROW ||
      keyCode === DOWN_ARROW
    ) {
      x = 50;
      y = 50;
      correct = 0;
      currentQuestion = 0;
      canMove = true;
      level = 2;
    }
  }

  if (currentQuestion === 200) {
    if (
      keyCode === LEFT_ARROW ||
      keyCode === RIGHT_ARROW ||
      keyCode === UP_ARROW ||
      keyCode === DOWN_ARROW
    ) {
      x = 50;
      y = 50;
      attempts = 1;
      correct = 0;
      currentQuestion = 0;
      canMove = true;
      level = 1;
    }
  }

  return false;
}
