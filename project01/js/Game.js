;(function () {
  let Game=window.Game=function() {
    let canvas = this.canvas = document.getElementById('canvas');
    this.draw = canvas.getContext('2d');
    let W = document.documentElement.clientWidth;
    let H = document.documentElement.clientHeight;
    canvas.width = W > 420 ? 420 : W;
    canvas.height = H > 750 ? 750 : H;
    this.R = {
      icon1: 'img/icon1.png',
      icon2: 'img/icon2.png',
      icon3: 'img/icon3.png',
      icon4: 'img/icon4.png',
      icon5: 'img/icon5.png',
      icon6: 'img/icon6.png',
      icon7: 'img/icon7.png',
      icon8: 'img/icon8.png',
      icon9: 'img/icon9.png',
      icon10: 'img/icon10.png',
      icon11: 'img/icon11.png',
      icon12: 'img/icon12.png',
      icon13: 'img/icon13.png',
      icon14: 'img/icon14.png',
      icon15: 'img/icon15.png',
      icon16: 'img/icon16.png',
      icon17: 'img/icon17.png',
      icon18: 'img/icon18.png',
      icon19: 'img/icon19.png',
      icon20: 'img/icon20.png',
    }
    let progress=new Progress(this.draw,canvas.width/2-150,canvas.height/3,0,30);
    let count=0; //统计已加载的图片数量
    let total=Object.keys(this.R).length; // 所有图片
    for(let key in this.R){
      // onLoad事件触发说明图片加载成功
      // 自己创建一个img替身
      let img = new Image();
      img.src = this.R[key];
      img.onload=() => {
        count++;
        this.clear();
        progress.update(count/total*300);
        progress.render();
        //资源加载完成游戏开始
        if(count==total){
          this.start();
        }
      }
    } 
  }
  Game.prototype.clear=function () {
    // 清屏
    this.draw.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
  Game.prototype.start=function () {
    //清屏
    this.clear();
    this.draw.fillStyle='red';
    this.draw.font='40px consolas';
    this.draw.fillText('游戏开始', 100, 200);
    // this.draw.fillText('内容', x, y);

  }
})();