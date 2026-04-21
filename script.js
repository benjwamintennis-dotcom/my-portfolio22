let clicked = false;

const button = document.getElementById('magicBtn');

button.addEventListener('click', () => {
    clicked = true;

    alert("It works! You just deployed a site from the cloud!");

    document.body.style.background = "linear-gradient(135deg, pink, purple)";
});

// p5 setup
function setup() {
  createCanvas(400, 400);
}

// p5 draw loop
function draw() {
  if (clicked) {
    background("orange");
    ellipse(200, 200, 150, 150);
  } else {
    background("lightblue");
  }
}