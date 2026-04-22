var mySound;
function preload() {
  
   mySound = loadSound(" Spin intro to programming project.mp3")
 
}
//I found this song on the website free music archive it was one of the websites to come up when i looked up creative commons music. Then searched for a song related to spinning and chose the only one to come and downloaded it into p5js then wrote the code.

function setup() {
  createCanvas(400, 400);

  mySound.play()
 
}

let angle = 0;



function draw() {
  background(220);
  background('Green')


  translate(200, 200);

  // Apply rotation
  rotate(angle);
  
  stroke('skyBlue')
   strokeWeight(random(1,10))
  // Draw the wheel
  circle(0, 0, 300);
  line(0, 0, 0, -150);
  line(0, 0, 115, -95);
  line(0, 0, 150, 0);
  line(0, 0, 115, 95);
  line(0, 0, 0, 150);
  line(0, 0, -115, -95);
  line(0, 0, -115, 95);
  line(0, 0, -150, 0);
  stroke('black')
  textSize(20)
  //text size, thickness, and color modifications.
  strokeWeight(1)
  
  
  wilch = text('Spin', 60, -20)
  textSize(15)
  wilch = text('By Jahzzar', 45,30)
  textSize(20)
  wilch = text('Spin', -125, -20)
  textSize(15)
  wilch = text('By Jahzzar', -125, 30)
  //text with song name and artist name
  


  

  
  angle += random(0.01, 1);
  frameRate(1)
  //slows down the speed the wheel spins at.
}
