(function () {
  let Bird=function() {
    this.x=100;
    this.y=100;
    this.changeY=5;
    this.rotate=0;
    this.img=[game.allImg['bird0_0']];
  };
  Bird.prototype.update=function() {
    this.changeY+=1;
    this.y+=this.changeY;
    this.rotate+=0.05;
    this.y<24?this.y=24:null;
  }
  Bird.prototype.render=function() {
    game.draw.save();
    game.draw.translate(this.x,this.y);
    game.draw.rotate(this.rotate);
    game.draw.drawImage(this.img[0],-24,-24);
    game.draw.restore();
  };
  Bird.prototype.fly=function() {
    // 当点击canvas时候瞬间上升一段距离
    this.changeY=-10;
  };
  window.Bird=Bird;
})();