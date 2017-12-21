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
let height_of_triabgle = 70;
let width_of_triangle = 40;

// speed of income grid of dollars
let inSpeed;
// speed of outcome line of dollars
let outSpeed;

function setupIniValues() {
    //=====================

    // setup controling
    createSpan('Use WASD  keys ')
    .style("width", "400px")
    .style("display", "inline-block")

    inSpeed = createSlider(0.1,0.9,0.1,.01);
    outSpeed = createSlider(0.1,0.9,0.1,.01);

    //=====================

    // setup style
    textAlign(CENTER)
    textSize(20)
    // stroke(255,0,0)
    // strokeWeight(25)

    // colorMode(HSB);
}

function setup() {
    createCanvas(1280, 760);

    setupIniValues()

    // setup 2 main figures
    let sbr = 25
    let grid_len = 200
    let grid_pos = createVector(width/2-grid_len, height/2-height_of_triabgle + sbr)

    income = new GridM(
      grid_pos, // pos
      grid_len, // length
      10, // density
      sbr, // space_between_rows_
      5, // rows_amount_
      .8) // speed_

    let line_pos = createVector(width/2+width_of_triangle, height/2+sbr/3)

    outcome = new LineM_for_grid(
      line_pos, // pos_
      10, // density_
      200, // length_
      .8) // char_speed_
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

function keyzCheck() {
  // controling
  keyz.map(x => {

      // нажата ли клавиша
      if (x.status) {

          // если нажата, то выполни действие, которое означает .code
          switch(x.code){
          case 'w': outSpeed.value(outSpeed.value() + .01); outcome.editSpeed(outSpeed.value()); break;
          case 's': outSpeed.value(outSpeed.value() - .01); outcome.editSpeed(outSpeed.value()); break;
          case 'd': inSpeed.value(inSpeed.value() + .01); income.editSpeed(inSpeed.value()); break;
          case 'a': inSpeed.value(inSpeed.value() - .01); income.editSpeed(inSpeed.value()); break;
          
        }
      }

  })
}

function draw() {

  background(51);

  keyzCheck()

  // move dollars
  income.live();
  outcome.live();
  
  // show then
  income.render();
  outcome.render();
 
  renderTriangle();
}

function renderTriangle() {
  // display triangle  
  push()
  translate(width*.5, height*.5)

  fill(255, 255, 255);
  noStroke();

  beginShape();
  vertex(0, height_of_triabgle);
  vertex(0, -height_of_triabgle);
  vertex(width_of_triangle, 0);
  endShape(CLOSE);

  fill(240, 58, 99);
  noStroke();

  // display triangle pink twin  
  beginShape();
  vertex(2, height_of_triabgle - 1);
  vertex(2, -height_of_triabgle - 1);
  vertex(width_of_triangle - 1, 0);
  endShape(CLOSE);
  pop()
  
}