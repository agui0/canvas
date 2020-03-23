;(function () {
  let Game=function () {
    // this => 实例game
    // 获取canvas标签，加到实例this上当做私有属性
    this.canvas=document.getElementById('canvas');
    // 创建绘制环境，加在实例this上，当做私有属性
    this.draw=this.canvas.getContext('2d');
    // 设置canvas的宽高，宽最大为420，如果屏幕超不过最大值，我们让其占满全屏
    // 获取一屏的宽和高
    let W=document.documentElement.clientWidth;
    let H=document.documentElement.clientHeight;
    // canvas自带width height
    this.canvas.width=W>420?420:W;
    this.canvas.height=H>750?750:H;
    this.allImg={
      bg_day: 'img/bg_day.png',
      land: 'img/land.png',
    }
    // 加载所有图片
    let n=0; // 计数器
    let total=Object.keys(this.allImg).length; // 图片总个数
    for (const key in this.allImg) {
      ((src) => {
        this.allImg[key]=new Image();
        this.allImg[key].src=src;
        this.allImg[key].onload=() => {
          n++;
          if(n==total){
            // 图片加载完成，可以进入游戏
            this.start()
          }
        }
      })(this.allImg[key]);
    }
  };
  window.Game=Game;
  Game.prototype.clear=function () {
    this.draw.clearRect(0,0,this.canvas.width,this.canvas.height);
  }
  Game.prototype.start=function () {
    // 开始游戏
    this.bg=new Background();
    this.land=new Land();
    setInterval(() => {
      // 先清屏
      this.clear();
      // 先更新在渲染
      this.bg.update();
      this.bg.render();
      this.land.update();
      this.land.render();
    }, 50)
  }
})();