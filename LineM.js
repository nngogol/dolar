class LineM {

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
    this.linee.map(x => x.render(color(230, 0, x.pos.x) ) )
    pop()
  }

  live() {
    this.linee.map(x => x.live(this.speeed))
  }
}