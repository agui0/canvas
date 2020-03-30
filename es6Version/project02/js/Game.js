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
    this.scene=0;// 场景编号
    this.score=0;// 分数
    this.loadImg();
    // this.bindEvent();
  };
  window.Game=Game;
  Game.prototype.clear=function () {
    this.draw.clearRect(0,0,this.canvas.width,this.canvas.height);
  }
  Game.prototype.start=function () {
    // 开始游戏
    this.f=0;
    // 实例化场景管理器的实例
    this.sM=new SceneManager();
    // 默认进入场景0 欢迎界面
    this.sM.enter(1);
    this.timer=setInterval(() => {
      this.f++;
      this.clear();
      this.sM.updateAndRender();
    },20)
    // this.bg=new Background();
    // this.land=new Land();
    // this.bird=new Bird();
    // this.bg.update();
    // this.bg.render();
    // this.pipeArr=[];//放管子的
    // this.f=0;
    // this.tiemr=setInterval(() => {
    //   this.f++;
    //   this.clear();// 先清屏
    //   // 先更新在渲染
    //   this.bg.update();
    //   this.bg.render();
    //   this.land.update();
    //   this.land.render();
    //   // 将pipeArr中存放的每一组管子更新渲染
    //   this.pipeArr.forEach((item)=>{
    //     item.update();
    //     item.render();
    //   })
    //   //每200帧new1个管子
    //   this.f%200===0&&new Pipe();
    //   this.bird.update();
    //   this.bird.render();
    // }, 20)
  }
  Game.prototype.loadImg=function() {
    this.allImg={
      bg_day: 'img/bg_day.png',
      land: 'img/land.png',
      pipe_down: 'img/pipe_down.png',
      pipe_up: 'img/pipe_up.png',
      bird0_0: 'img/bird0_0.png',
      bird0_1: 'img/bird0_1.png',
      bird0_2: 'img/bird0_2.png',
      title: 'img/title.png',
      button_play: 'img/button_play.png',
      tutorial: 'img/tutorial.png',
      shuzi0: 'img/font_048.png',
      shuzi1: 'img/font_049.png',
      shuzi2: 'img/font_050.png',
      shuzi3: 'img/font_051.png',
      shuzi4: 'img/font_052.png',
      shuzi5: 'img/font_053.png',
      shuzi6: 'img/font_054.png',
      shuzi7: 'img/font_055.png',
      shuzi8: 'img/font_056.png',
      shuzi9: 'img/font_057.png',
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
  }
  Game.prototype.bindEvent=function() {
    // 给this.canvas绑定事件
    // this.canvas.onclick=() => {
    //   this.bird.fly();
    // }
  }
})();