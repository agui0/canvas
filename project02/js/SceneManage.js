(function () {
  let SceneManager=function () {
    this.bindEvent();
  }
  SceneManager.prototype.enter=function (number) {
    switch (number) {
      case 0:
        this.titleY=0;
        this.buttonY=game.canvas.height;
        this.birdY=300;
        this.birdChangeY=1.2;
        break;
      case 1:
        game.scene=1;
        this.tutorialAlpha=0;
        this.tutorialAlphaChange=0.05;
        break;
      case 2:
          game.scene=2;
          game.bg=new Background();
          game.land=new Land();
          game.bird=new Bird();
          game.pipeArr=[];
        break;
      case 3:
      
        break;
      default:
        break;
    }
  }
  SceneManager.prototype.updateAndRender=function () {
    // 根据场景编号来判断第几个场景，然后做相应的处理
    switch (game.scene) {
      case 0:
        game.draw.fillStyle='#4ec0ca';
        game.draw.fillRect(0,0,game.canvas.width,game.canvas.height);
        game.draw.drawImage(game.allImg['bg_day'],0,game.canvas.height-512);
        game.draw.drawImage(game.allImg['bg_day'],288,game.canvas.height-512);
        game.draw.drawImage(game.allImg['land'],0,game.canvas.height-112);
        game.draw.drawImage(game.allImg['land'],336,game.canvas.height-112);
        this.titleY+=5;
        this.buttonY-=10;
        this.birdY+=this.birdChangeY;
        this.titleY>=160 ? this.titleY=160 : null;
        this.buttonY<=370 ? this.buttonY=370 : null;
        this.birdY>=310 || this.birdY<=240 ? this.birdChangeY=-this.birdChangeY : null;
        game.draw.drawImage(game.allImg['title'],(game.canvas.width-178)/2,this.titleY);
        game.draw.drawImage(game.allImg['button_play'],(game.canvas.width-116)/2,this.buttonY);
        game.draw.drawImage(game.allImg['bird0_0'],(game.canvas.width-48)/2,this.birdY);
        break;
      case 1:
        game.draw.fillStyle='#4ec0ca';
        game.draw.fillRect(0,0,game.canvas.width,game.canvas.height);
        game.draw.drawImage(game.allImg['bg_day'],0,game.canvas.height-512);
        game.draw.drawImage(game.allImg['bg_day'],288,game.canvas.height-512);
        game.draw.drawImage(game.allImg['land'],0,game.canvas.height-112);
        game.draw.drawImage(game.allImg['land'],336,game.canvas.height-112);
        game.draw.drawImage(game.allImg['bird0_0'],(game.canvas.width-48)/2,150);
        this.tutorialAlpha=Number(this.tutorialAlpha.toFixed(2));
        this.tutorialAlpha>=1||this.tutorialAlpha<=0?this.tutorialAlphaChange*=-1:null;
        this.tutorialAlpha+=this.tutorialAlphaChange;
        this.tutorialAlpha<0?this.tutorialAlpha=0:null;
        this.tutorialAlpha>1?this.tutorialAlpha=1:null;
        game.draw.save();
        game.draw.globalAlpha=this.tutorialAlpha;
        game.draw.drawImage(game.allImg['tutorial'],(game.canvas.width-114)/2,250);
        game.draw.restore();
        break;
      case 2:
        game.bg.update();
        game.bg.render();
        game.land.update();
        game.land.render();
        // game.bird.update();
        game.bird.render();
        game.f%200==0?new Pipe():null;
        game.pipeArr.forEach((item) => {
          item.update();
          item.render();
        })
        break;
      case 3:
      
        break;
      default:
        break;
    }
  }
  SceneManager.prototype.bindEvent=function () {
    // 只能给canvas绑定事件因为页面上只有一个元素canvas，其他的都是画上去的
    //怎么确定绑定到对应的位置上？只能通过clientX和clientY来确定
    //注意不同场景下都可能会有点击事件，所以得判断点击的是在什么场景下的位置，同上也是使用switch做判断即可
    game.canvas.onclick=(e) => {
      // this-->sM当前场景管理器的实例
      switch (game.scene) {
        case 0:
          if(e.clientY>this.buttonY&&e.clientY<this.buttonY+70&&e.clientX>game.canvas.width/2-58&&e.clientX<game.canvas.width/2+58) {
            // 点击的是button_play的位置
            this.enter(1);
          }
          break;
        case 1:
          this.enter(2);  
          break;
        default:
          break;
      }
    }
  }
  window.SceneManager=SceneManager;
})();