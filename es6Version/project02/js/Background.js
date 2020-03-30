(function () {
  // 背景类
  class Background {
    constructor() {
      this.x=0;
      this.w=288;
      this.h=512;
      this.step=1;
    }
    // 更新
    update() {
      this.x-=this.step;
      //临界值判断
      if(this.x<=-this.w) {
        this.x=0;
      }
    }
    // 渲染
    render=function() {
      // 将图片按照原尺寸放到画布上;
      // game.draw.drawImage(图片,x,y);
      game.draw.drawImage(game.allImg['bg_day'],this.x,game.canvas.height-this.h);
      game.draw.drawImage(game.allImg['bg_day'],this.x+this.w,game.canvas.height-this.h);
      game.draw.drawImage(game.allImg['bg_day'],this.x+this.w*2,game.canvas.height-this.h);
      game.draw.fillStyle='#4ec0ca';
      game.draw.fillRect(0,0,game.canvas.width,game.canvas.height-this.h);
  
    }
  }
  window.Background=Background;
})();