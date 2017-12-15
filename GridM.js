class GridM {

  constructor(cols_, rows_, startPos_, endPos_, speed_, bottomTri, topTri, radddiums) {

    this.cols = cols_;
    this.rows = rows_;
    this.startPos = startPos_;
    this.endPos = endPos_;
    this.spacing = 2;

    // init our grid
    this.grid = []

    // insert Movers into grid
    for (let i = 1; i < this.rows; i++) {
      for (let j = 0; j < this.cols-1; j++) {

        // initial(start) position
        let init = createVector (this.startPos, map(i, 0, this.rows - 1, bottomTri.y + this.spacing, topTri.y - this.spacing ));

        // end(finish) position
        let end = createVector(this.endPos, map(i, 0, this.rows - 1, bottomTri.y + this.spacing, topTri.y - this.spacing ));

        // its own position
        let curr = createVector(
          map(j, 0, this.cols - 1, this.startPos, this.endPos),
          map(i, 0, this.rows - 1, bottomTri.y + this.spacing, topTri.y - this.spacing ));


        // make mover
        let m = new Mover( init, end, curr, speed_, radddiums);

        // run mover
        m.run_switch();

        // add it to 2d array
        this.grid.push(m)
      }
    }



  }

  render(clo) {
    this.grid.map(x => x.render(color(180,x.pos.x, x.pos.y)))
  }

  live() {
    this.grid.map(x => x.live())
  }

}