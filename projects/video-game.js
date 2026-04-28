// ============ GLOBALS ============
let x = 50
let y = 50
let attempts = 1
let canMove = true
let currentQuestion = 0
let correct = 0
let level = 1

// ============ SETUP ============
function setup() {
  createCanvas(windowWidth, windowHeight)
  background(200)
}

// ============ DRAW ============
function draw() {
  if (level === 1) {
    drawLevel1()
  } else if (level === 2) {
    drawLevel2()
  }
}

// ============ LEVEL 1 ============
function drawLevel1() {
  if (x === 50 && y === 50) canMove = true

  background(50, 80, 110)

  fill(0, 200, 0)
  noStroke()
  square(430, 420, 40)

  fill(0)
  rect(120, 0, 20, 220)
  rect(240, 120, 20, 360)
  rect(360, 0, 20, 220)
  rect(260, 320, 100, 20)

  if (canMove && currentQuestion === 0) {
    if (keyIsDown(LEFT_ARROW)) x -= 1
    if (keyIsDown(RIGHT_ARROW)) x += 1
    if (keyIsDown(UP_ARROW)) y -= 1
    if (keyIsDown(DOWN_ARROW)) y += 1
  }

  fill(255, 0, 0)
  noStroke()
  circle(x, y, 10)

  fill(255)
  textSize(14)
  text("Attempts: " + attempts, 320, 20)
  text("Level: 1", 30, 20)
  text("Correct: " + correct, 30, 40)

  if (x === 50 && y === 50) {
    textSize(13)
    text("Use arrow keys", 30, 510)
    text("Answer 3 questions and go to green", 30, 530)
  }

  if (x < 20 || x > 480 || y < 20 || y > 480) {
    x = 50
    y = 50
    attempts++
  }

  if (x > 120 && x < 140 && y > 0 && y < 220) {
    x = 50
    y = 50
    attempts++
  }
  if (x > 240 && x < 260 && y > 120 && y < 480) {
    x = 50
    y = 50
    attempts++
  }
  if (x > 360 && x < 380 && y > 0 && y < 220) {
    x = 50
    y = 50
    attempts++
  }
  if (x > 260 && x < 360 && y > 320 && y < 340) {
    x = 50
    y = 50
    attempts++
  }

  if (x > 50 && x < 100 && y > 300 && y < 340 && correct === 0) {
    currentQuestion = 1
    canMove = false
  }

  if (x > 150 && x < 200 && y > 300 && y < 340 && correct === 1) {
    currentQuestion = 2
    canMove = false
  }

  if (x > 280 && x < 330 && y > 60 && y < 100 && correct === 2) {
    currentQuestion = 3
    canMove = false
  }

  if (currentQuestion === 1) {
    fill(30, 30, 30, 220)
    noStroke()
    rect(80, 420, 400, 150, 12)
    fill(255)
    textSize(14)
    text("What is 5 + 7?", 100, 445)
    textSize(13)
    text("A) 10", 100, 475)
    text("B) 12", 230, 475)
    text("C) 14", 100, 500)
    text("D) 16", 230, 500)
    text("Press A B C or D", 100, 530)
  }

  if (currentQuestion === 2) {
    fill(30, 30, 30, 220)
    noStroke()
    rect(80, 420, 400, 150, 12)
    fill(255)
    textSize(14)
    text("Which one is a mammal?", 100, 445)
    textSize(13)
    text("A) Shark", 100, 475)
    text("B) Frog", 230, 475)
    text("C) Dolphin", 100, 500)
    text("D) Trout", 230, 500)
    text("Press A B C or D", 100, 530)
  }

  if (currentQuestion === 3) {
    fill(30, 30, 30, 220)
    noStroke()
    rect(80, 420, 400, 150, 12)
    fill(255)
    textSize(14)
    text("Blue and yellow make what color?", 100, 445)
    textSize(13)
    text("A) Green", 100, 475)
    text("B) Orange", 230, 475)
    text("C) Red", 100, 500)
    text("D) Purple", 230, 500)
    text("Press A B C or D", 100, 530)
  }

  if (x > 430 && x < 470 && y > 420 && y < 460 && correct === 3) {
    canMove = false
    currentQuestion = 100
  }

  if (currentQuestion === 100) {
    fill(0, 200, 0)
    noStroke()
    rect(90, 170, 320, 140, 15)
    fill(0)
    textSize(24)
    text("Level 1 Complete", 130, 225)
    textSize(15)
    text("Press any arrow key", 165, 265)
  }
}

// ============ LEVEL 2 ============
function drawLevel2() {
  if (x === 50 && y === 50) canMove = true

  background(20, 35, 55)

  fill(0, 200, 0)
  noStroke()
  square(430, 60, 40)

  fill(0)
  rect(100, 0, 20, 260)
  rect(200, 120, 20, 360)
  rect(300, 0, 20, 220)
  rect(400, 180, 20, 300)
  rect(220, 380, 140, 20)

  if (canMove && currentQuestion === 0) {
    if (keyIsDown(LEFT_ARROW)) x -= 1
    if (keyIsDown(RIGHT_ARROW)) x += 1
    if (keyIsDown(UP_ARROW)) y -= 1
    if (keyIsDown(DOWN_ARROW)) y += 1
  }

  fill(255, 0, 0)
  noStroke()
  circle(x, y, 10)

  fill(255)
  textSize(14)
  text("Attempts: " + attempts, 320, 20)
  text("Level: 2", 30, 20)
  text("Correct: " + correct, 30, 40)

  if (x === 50 && y === 50) {
    textSize(13)
    text("Level 2", 30, 510)
    text("Answer 3 questions and go to green", 30, 530)
  }

  if (x < 20 || x > 480 || y < 20 || y > 480) {
    x = 50
    y = 50
    attempts++
  }

  if (x > 100 && x < 120 && y > 0 && y < 260) {
    x = 50
    y = 50
    attempts++
  }
  if (x > 200 && x < 220 && y > 120 && y < 480) {
    x = 50
    y = 50
    attempts++
  }
  if (x > 300 && x < 320 && y > 0 && y < 220) {
    x = 50
    y = 50
    attempts++
  }
  if (x > 400 && x < 420 && y > 180 && y < 480) {
    x = 50
    y = 50
    attempts++
  }
  if (x > 220 && x < 360 && y > 380 && y < 400) {
    x = 50
    y = 50
    attempts++
  }

  if (x > 40 && x < 90 && y > 320 && y < 360 && correct === 0) {
    currentQuestion = 4
    canMove = false
  }

  if (x > 140 && x < 190 && y > 320 && y < 360 && correct === 1) {
    currentQuestion = 5
    canMove = false
  }

  if (x > 340 && x < 390 && y > 260 && y < 300 && correct === 2) {
    currentQuestion = 6
    canMove = false
  }

  if (currentQuestion === 4) {
    fill(30, 30, 30, 220)
    noStroke()
    rect(80, 420, 400, 150, 12)
    fill(255)
    textSize(14)
    text("Which planet is the Red Planet?", 100, 445)
    textSize(13)
    text("A) Earth", 100, 475)
    text("B) Mars", 230, 475)
    text("C) Venus", 100, 500)
    text("D) Neptune", 230, 500)
    text("Press A B C or D", 100, 530)
  }

  if (currentQuestion === 5) {
    fill(30, 30, 30, 220)
    noStroke()
    rect(80, 420, 400, 150, 12)
    fill(255)
    textSize(14)
    text("What is 9 x 8?", 100, 445)
    textSize(13)
    text("A) 72", 100, 475)
    text("B) 64", 230, 475)
    text("C) 81", 100, 500)
    text("D) 70", 230, 500)
    text("Press A B C or D", 100, 530)
  }

  if (currentQuestion === 6) {
    fill(30, 30, 30, 220)
    noStroke()
    rect(80, 420, 400, 150, 12)
    fill(255)
    textSize(14)
    text("Which ocean is the largest?", 100, 445)
    textSize(13)
    text("A) Atlantic", 100, 475)
    text("B) Indian", 230, 475)
    text("C) Arctic", 100, 500)
    text("D) Pacific", 230, 500)
    text("Press A B C or D", 100, 530)
  }

  if (x > 430 && x < 470 && y > 60 && y < 100 && correct === 3) {
    canMove = false
    currentQuestion = 200
  }

  if (currentQuestion === 200) {
    fill(0, 200, 0)
    noStroke()
    rect(90, 170, 320, 140, 15)
    fill(0)
    textSize(24)
    text("You Finished", 165, 225)
    textSize(15)
    text("Press any arrow key", 165, 265)
  }
}

// ============ KEY PRESSED ============
function keyPressed() {
  if (currentQuestion === 1) {
    if (key === "b" || key === "B") {
      canMove = true
      currentQuestion = 0
      correct = 1
    } else if (key === "a" || key === "A" || key === "c" || key === "C" || key === "d" || key === "D") {
      x = 50
      y = 50
      attempts++
      canMove = true
      currentQuestion = 0
      correct = 0
    }
  }

  if (currentQuestion === 2) {
    if (key === "c" || key === "C") {
      canMove = true
      currentQuestion = 0
      correct = 2
    } else if (key === "a" || key === "A" || key === "b" || key === "B" || key === "d" || key === "D") {
      x = 50
      y = 50
      attempts++
      canMove = true
      currentQuestion = 0
      correct = 0
    }
  }

  if (currentQuestion === 3) {
    if (key === "a" || key === "A") {
      canMove = true
      currentQuestion = 0
      correct = 3
    } else if (key === "b" || key === "B" || key === "c" || key === "C" || key === "d" || key === "D") {
      x = 50
      y = 50
      attempts++
      canMove = true
      currentQuestion = 0
      correct = 0
    }
  }

  if (currentQuestion === 4) {
    if (key === "b" || key === "B") {
      canMove = true
      currentQuestion = 0
      correct = 1
    } else if (key === "a" || key === "A" || key === "c" || key === "C" || key === "d" || key === "D") {
      x = 50
      y = 50
      attempts++
      canMove = true
      currentQuestion = 0
      correct = 0
    }
  }

  if (currentQuestion === 5) {
    if (key === "a" || key === "A") {
      canMove = true
      currentQuestion = 0
      correct = 2
    } else if (key === "b" || key === "B" || key === "c" || key === "C" || key === "d" || key === "D") {
      x = 50
      y = 50
      attempts++
      canMove = true
      currentQuestion = 0
      correct = 0
    }
  }

  if (currentQuestion === 6) {
    if (key === "d" || key === "D") {
      canMove = true
      currentQuestion = 0
      correct = 3
    } else if (key === "a" || key === "A" || key === "b" || key === "B" || key === "c" || key === "C") {
      x = 50
      y = 50
      attempts++
      canMove = true
      currentQuestion = 0
      correct = 0
    }
  }

  if (currentQuestion === 100) {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
      x = 50
      y = 50
      correct = 0
      currentQuestion = 0
      canMove = true
      level = 2
    }
  }

  if (currentQuestion === 200) {
    if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW || keyCode === UP_ARROW || keyCode === DOWN_ARROW) {
      x = 50
      y = 50
      attempts = 1
      correct = 0
      currentQuestion = 0
      canMove = true
      level = 1
    }
  }
}
