let cnv;
function setup() {
	cnv= createCanvas(innerWidth, innerHeight);
	cnv.parent('p5Sketch');
}


function draw() {
  // put drawing code here
  background(51);

}

function windowResized(){
resizeCanvas(innerWidth, innerHeight);

}