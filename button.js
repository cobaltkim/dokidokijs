class Button {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  over() {
    let x2 = this.x + this.w;
    let y2 = this.y + this.h;
    if (this.x < mouseX && mouseX < x2 && this.y < mouseY && mouseY < y2) {
      return true;
    } else {
      return false;
    }
  }
}

class ButtonCircle {
  constructor(x,y,r) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.c = color(255, 0);
  }

  over() {
      let d = dist(mouseX, mouseY, this.x,this.y);
      if (d < this.r - 20) {
        return true;
      } else {
        return false;
      }
    }

  // show() {
  //   if (this.over()) {
  //     fill(255, 200);
  //     circle(this.x, this.y, this.r);
  //   }
  // }
}