let x= 337;
let y=45;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(44,217,17);

 strokeWeight(10);
  stroke(237,127,9);
  ellipse(252,180,150,150);
  rect(259,256,120,190)
  line(0,250,600,250);
 triangle(250,20,300,130,200,130);
 
  x=x-5

fill(245,237,10);
  
  ellipse(289,180,30);

translate(200,200);
rotate(radians(x));
ellipse(-25,-25,50,50);
x=x+1;












}




