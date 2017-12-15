let income;
let outcome;


let linne = 30;
let nose = 40;
let topTri ;
let bottomTri ;

// grid of income
let cols = 30;
let rows = 10;

// grid position
let st = -180;
let en = 2;

function setup() {
    createCanvas(1280, 360);
    // smooth()

    textAlign(CENTER)
    textSize(7)

    topTri = createVector(0, linne);
	bottomTri = createVector(0, -linne);

    income = new GridM(cols, rows, st, en, .05, bottomTri,topTri, 5);
    outcome = new LineM(25, nose, 200, .05, 5);

    translate(width / 2, height / 2);
    scale(8);

}

function draw() {

  background(20);
  income.live();
  outcome.live();
  
  translate(width / 2, height / 2);
  scale(4);

  income.render();
  outcome.render();
  
  
  push();
  
  beginShape();
  fill(255, 20, 150,128);
  noStroke();
  vertex(topTri.x, topTri.y);
  vertex(bottomTri.x, bottomTri.y);
  vertex(nose, 0);

  endShape(CLOSE);

  beginShape();
  fill(255, 20, 30,128);
  noStroke();
  vertex(topTri.x+2, topTri.y-1);
  vertex(bottomTri.x+2, bottomTri.y-1);
  vertex(nose-1, 0);

  endShape(CLOSE);
  
  pop();
}

function renderTriangle() {
	
}