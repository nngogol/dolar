class Mover {

  constructor(start_, end_, curr_, speed_, rad_,startColor_ = color(255,0,0),endColor_= color(0,255,0)) {
    this.initStart = start_.copy();
    this.end = end_.copy();
    this.pos = curr_.copy();
    this.speed = speed_;
    this.rad = rad_;
    this.go = false;
    this.startColor = startColor_;
    this.endColor = endColor_;
  }

  run_switch() {
    this.go = !this.go;
  }

  live() {
    // if we allowed to go
    if (this.go) {
      //PVector targer = PVector.sub(this.end, this.pos);
      //targer.setMag(this.speed);
      //pos.add(targer);

      // add 5 to x axis
      let addVec = createVector(1,0);
      addVec.setMag(this.speed)
      this.pos.add(addVec);

      // if we are close to end -> set current position to initStat
      if (dist(this.pos.x, this.pos.y, this.end.x, this.end.y) < this.speed) {
        this.pos.mult(0);
        this.pos.add(this.initStart);
      }

    }
  }

  render(colr = color(2,2,2)) {

    // render initial start position
    //fill(255,0,0);
    //ellipse(this.initStart.x, this.initStart.y, 16, 16);

    // render end position
    //fill(0,255,0);
    //ellipse(this.end.x, this.end.y, 16,16);

    // render current position
    // fill(230, 0, this.pos.x);
    fill(colr)
    //40 19 45                  93 10 112                     234 0 123
    //textSize(5);

    text("$", this.pos.x, this.pos.y);
    // ellipse(this.pos.x, this.pos.y, this.rad, this.rad);

    // line beetween current position and end
    //line(this.pos.x, this.pos.y, this.end.x, this.end.y);

  }
}