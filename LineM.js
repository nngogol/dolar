class OldLineM {

  constructor(count_, startPos_, endPos_, speed_, radddiums) {

    this.count = count_;
    this.startPos = startPos_;
    this.endPos = endPos_;
    this.speeed = 1;

    // init our grid
    this.linee = []

    // insert Movers into grid
    for (let i = 0; i < this.count; i++) {

      // initial(start) position
      let init = createVector(this.startPos, 0);

      // end(finish) position
      let end = createVector(this.endPos, 0);

      // its own position
      let curr = createVector (map(i, 0, this.count - 1, this.startPos, this.endPos), 0);


      // make mover
      let m = new Mover( init, end, curr, speed_, radddiums);
      // run mover
      m.run_switch();

      this.linee.push(m);
    }
  }

  render(clo) {
    push()
    translate(0,2)
    this.linee.map(x => {
      console.log(x)
      let hu = map(x.pos.x, x.initStart.x, x.end.x, 0, 10)
      let br = map(x.pos.x, x.initStart.x, x.end.x, 150, 0)
      // let br = map(x.curr, 0, dist(x.initStart, x.end), 0, 255)
      x.render(color(hu, 255, br)) 
    })
    pop()
  }

  live() {
    this.linee.map(x => x.live(this.speeed))
  }
}

class LineM_for_grid {

  constructor (pos_, density_, length_, char_speed_,
    char_size_=8, char_symbol_ = "$"){


    // position is p5Vector in pixels
    this.pos = pos_
    // density of dolars in this line
    this.density = density_
    // how long is your dolar line
    this.length = length_
    // change it to some other symbol
    this.char_symbol = char_symbol_
    // speed of moving
    this.char_speed = char_speed_
    // value for textFont
    this.char_size = char_size_

    // movers array
    this.movers = []

    // insert Movers into grid
    for (let i = 0; i < this.density-1; i++) {

      // initial(start) position
      let init = createVector(this.pos.x, this.pos.y);

      // end(finish) position
      let end = createVector(this.pos.x + this.length, this.pos.y);

      // its own position
      let curr = createVector (map(i, 0, this.density - 1, this.pos.x, this.pos.x + this.length), this.pos.y);

      // make mover
      let m = new Mover( init, end, curr, this.char_speed);
      // run mover
      m.run_switch();

      this.movers.push(m);
    }
  }
  editSpeed(s){
    this.char_speed = s;
  }

  changeMoversRadius(r){
    this.movers = this.movers.map(x => {
      let newMover = x.changeRadius(r)
      return newMover
    })

    return this
  }

  render() {
    this.movers.map(x => {
      // console.log(x)
      // let hu = map(x.pos.x, x.initStart.x, x.end.x, 0, 10)
      // let br = map(x.pos.x, x.initStart.x, x.end.x, 150, 0)
      // let br = map(x.curr, 0, dist(x.initStart, x.end), 0, 255)
      // x.render(color(hu, 255, br)) 
      x.render() 
    })
  }

  live() {
    this.movers.map(x => x.live(this.char_speed))
  }
}

