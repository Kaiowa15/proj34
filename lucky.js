class Lucky {

 constructor(x,y) {
 this.x = x;
 this.y = y;
 this.width = 30;
 this.height = 30;
 this.luckyblockimg = loadImage('luckyblock.png')

  }

  display (){

    push();
    imageMode(CENTER);
    image(this.luckyblockimg, this.x, this.y,30,30);
    pop();
    noFill();
  }
 

}