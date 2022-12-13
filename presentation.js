class Presentation{
  constructor(x, y, xpos, ypos, score){
    this.x = x;
    this.y = y;
    this.xpos = xpos;
    this.ypos = ypos;
    this.score = score;
  }
  
  show(){
    noStroke();
    noFill();
    rectMode(CORNER);
    rect(this.x, this.y, this.xpos, this.ypos);
    if (this.x<mouseX && mouseX<this.x+this.xpos && this.y<mouseY && mouseY<this.y+this.ypos){
      fill(0);
      rect(mouseX, mouseY, 30, 100);
    }
    rectMode(CENTER);
  }

  stuOver(){
    if (this.x<mouseX && mouseX<this.x+this.xpos && this.y<mouseY && mouseY<this.y+this.ypos){
      return true;
    }
  }
} 