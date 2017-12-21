class GridM {

  constructor(pos_, lenght_, density_, space_between_rows_, rows_amount_, speed_){

    // position of the grid
    this.pos = pos_
    // how lenght(width) the grid is
    this.lenght = lenght_
    // amount of dolars in this line - their density
    this.density = density_
    // space between row(line of dolars)
    this.space_between_rows = space_between_rows_
    // how much lines there is grid
    this.rows_amount = rows_amount_
    // speed of each line
    this.speed = speed_

    // a lines array
    this.lines = []


    for (let i = 0; i < this.rows_amount; i++) {
      let some_line = new LineM_for_grid(createVector(this.pos.x, this.pos.y+i*this.space_between_rows),
                                          this.density,
                                          this.lenght,
                                          this.speed);
      this.lines.push(some_line)
    }

  }

  changeMoversRadius(r){
    this.lines = this.lines.map(x => {
      let newLine = x.changeMoversRadius(r)
      return newLine
    })
  }

  editSpeed(s){
    this.speed = s;
  }

  render() {
    this.lines.map(x => x.render(this.speed))
    // let hu = map(x.pos.x, x.initStart.x, x.end.x, 0, 10)
    // let br = map(x.pos.x, x.initStart.x, x.end.x, 0, 150)
    // liine.render(color(hu, 255, br)) 
  }

  live() {
    this.lines.map(x => x.live(this.speed))
  }

}