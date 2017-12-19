// all control in app
let keyz = [
    {
      status:false,
      code:'w' // w
    },
    {
      status:false,
      code:'s' // s
    },
    {
      status:false,
      code:'d' // d
    },
    {
      status:false,
      code:'a' // a
    }
  ]

// line of dollars
let income;
// grid of dollars
let outcome;

// settings
let linne = 30;
let nose = 40;
let topTri;
let bottomTri;

// grid of income
let cols = 30;
let rows = 10;

// grid position
let st = -180; // start
let en = 2;    // end

// speed of income grid of dollars
let inSpeed;
// speed of outcome line of dollars
let outSpeed;

function setup() {
    createCanvas(1280, 360);

    // setup triangle height and width
    topTri = createVector(0, linne);
    bottomTri = createVector(0, -linne);

    // setup income dollars grid
    //         and 
    // setup outcome dollars line
    income = new GridM(cols, rows, st, en, .05, bottomTri, topTri, 5);
    outcome = new LineM(25, nose, 200, .05, 5);
    income.speeed = 0.1
    outcome.speeed = 0.1

    // setup style
    translate(width / 2, height / 2);
    scale(8);
    textAlign(CENTER)
    textSize(7)

    // setup controling
    createSpan('Use WASD  keys ')
    .style("width", "400px")
    .style("display", "inline-block")

    inSpeed = createSlider(0.1,0.9,0.1,.01);
    outSpeed = createSlider(0.1,0.9,0.1,.01);
}


// FOR MULTIPLE KEYS PRESSED
function keyPressed(event) {
  for (let i = 0; i < keyz.length; i++) {
    if (event.key == keyz[i].code){
      keyz[i].status = true
      break;
    }
  }
}

function keyReleased(event) {
  for (let i = 0; i < keyz.length; i++) {
    if (event.key == keyz[i].code){
      keyz[i].status = false
      break;
    }
  }
}
// FOR MULTIPLE KEYS PRESSED _ END


function draw() {

  background(20);

  // controling
  keyz.map(x => {

      // нажата ли клавиша
      if (x.status) {

          // если нажата, то выполни действие, которое означает .code
          switch(x.code){
          case 'w': outSpeed.value(outSpeed.value() + .01); outcome.speeed = outSpeed.value(); break;
          case 's': outSpeed.value(outSpeed.value() - .01); outcome.speeed = outSpeed.value(); break;
          case 'd': inSpeed.value(inSpeed.value() + .01); income.speeed = inSpeed.value(); break;
          case 'a': inSpeed.value(inSpeed.value() - .01); income.speeed = inSpeed.value(); break;
          
        }
      }

  })

  // move dollars
  income.live();
  outcome.live();
  
  translate(width / 2, height / 2);
  scale(4);

  // show then
  income.render();
  outcome.render();
  
  
  // display triangle  
  push();
  beginShape();
  fill(255, 20, 150,128);
  noStroke();
  vertex(topTri.x, topTri.y);
  vertex(bottomTri.x, bottomTri.y);
  vertex(nose, 0);
  endShape(CLOSE);

  // display triangle pink twin  
  beginShape();
  fill(255, 20, 30,128);
  noStroke();
  vertex(topTri.x+2, topTri.y-1);
  vertex(bottomTri.x+2, bottomTri.y-1);
  vertex(nose-1, 0);
  endShape(CLOSE);
  
  pop();
}