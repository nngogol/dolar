class Mover {

  constructor(start_, end_, curr_, speed_, rad_ = 4) {
    this.initStart = start_.copy();
    this.end = end_.copy();
    this.pos = curr_.copy();
    this.speed = speed_;
    this.rad = rad_;

    this.go = false;
  }

  run_switch() {
    this.go = !this.go;
  }

  live(custom_speed = this.speed) {

    
    // if we allowed to go
    if (this.go) {

      // add 5 to x axis
      let addVec = createVector(1,0);
      addVec.setMag(custom_speed)
      this.pos.add(addVec);

      // if we are close to end -> set current position to initStat
      if (dist(this.pos.x, this.pos.y, this.end.x, this.end.y) < custom_speed) {
        this.pos.x = this.initStart.x
        this.pos.y = this.initStart.y
      }

    }
  }

  changeRadius(r){
    this.rad = r;

    return this
  }

  render(colr) {

    // if there is color
    if (colr) {
      fill(colr)
    }else{// if there isn't color
      fill(2,2,2)
    }
    //40 19 45                  93 10 112                     234 0 123
    //textSize(5);

    text("$", this.pos.x, this.pos.y);
  }
}