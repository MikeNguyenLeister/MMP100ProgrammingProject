var diam1=0;
function setup() {
  createCanvas(400, 400);
   background(220);
}
function draw() {
  fill("lawngreen");
  stroke("darkgreen");
  strokeWeight(5);
  ellipse(random (width), random (height), 20, 20);
  //mouseX and mouseY have been replaced
  fill("#800080");
  stroke("128,0,128");
  strokeWeight(1);
  ellipse(50, 100, diam1, diam1);
  textSize(25);
  textFont("Helvetica");
  text("Helvetica says, Peas to meet you! ", 17, 17);
  
}
function mousePressed(){
diam1=diam1 +5;
}  