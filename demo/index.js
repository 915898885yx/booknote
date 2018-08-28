(function () {
  var imgIndex = 0
  function Block () {
    this.timer = ''
    this.speed = 10
    this.dom = ''
    this.bgList = [
      {name: '安装费心', url: './images/1.png'},
      {name: '服务差', url: './images/2.png'},
      {name: '价格虚高', url: './images/3.png'},
      {name: '建材劣质', url: './images/4.png'},
      {name: '投诉无门', url: './images/5.png'}
    ]
  }
  Block.prototype = {
    createBlock (top = 0, left = 0, imgIndex = 0) { // 创建一个石头
      this.dom = document.createElement('div')
      oStyle = this.dom.style
      oStyle.height = '118px'
      oStyle.width = '118px'
      oStyle.position = 'absolute'
      oStyle.left = left + 'vw'
      oStyle.top = top + 'px'
      oStyle.background = `url(${this.bgList[imgIndex].url})`
      document.getElementById('container').appendChild(this.dom)
      this.moveBottom.call(this)
      console.log(this.dom.offsetLeft)
    },
    moveBottom () { // 石头向下移动
      this.timer = setInterval(() => {
        this.dom.style.top = this.dom.offsetTop + 5 + 'px'
        if (this.dom.offsetTop >= 2000) { // 超出删除当前元素，减少页面的dom
          clearInterval(this.timer)
          this.removeBlock.call(this)
        }
      }, 20)
    },
    removeBlock () {
      document.getElementById('container').removeChild(this.dom)
    }
  }
  // 小人部分
  var slideDom = document.getElementById("img");//滑动区域
  var length = slideDom.children.length;//子类节点长度
  var index = 0;//初始下标
  window.prevX = 0;
  slideDom.addEventListener('touchstart', touchstart, false);
  slideDom.addEventListener('touchmove', touchmove, false);
  slideDom.addEventListener('touchend', touchend, false);
   
  //开始滑动
  function touchstart(e){
    console.log(e)
      var point = getPoint(e);
      window.startX = point.pageX;
      // console.log(window.startX);
  };
  //滑动过程中
  function touchmove(e){
      e.preventDefault();//阻止默认行为
      var point = getPoint(e);
      window.moveX = point.pageX;
      window.deltaX = window.moveX - 100; //  - window.startX
      domove(window.deltaX+window.prevX);
  };
  //结束滑动
  function touchend(e){
      var x = Math.abs(window.deltaX);
      // var item_w = document.getElementById("img").offsetWidth;
      // if(window.deltaX>0){
      //     if(x>item_w){
      //         var indexd = Math.round(x / item_w);
      //         index = index - indexd;
      //     }else{
      //         if(x/item_w > 0.3){
      //             index--
      //         }
      //     }
      // }else if(window.deltaX<0){
      //     if(x>item_w){
      //         var indexd = Math.round(x / item_w);
      //         index = index + indexd;
      //     }else{
      //         if(x/item_w > 0.3){
      //             index++;
      //         }
      //     }
      // }
      if(index >= (length-1)){
          index = length-1;
      }
      if(index <0 ){
          index = 0;
      }
      // window.prevX = -index*item_w;
      // domove(window.prevX,true);
  };
  //默认以第一个手指的位置计算
  function getPoint(e) {
      return e.touches ? e.touches[0] : e;
  };
  //利用transform移动
  function domove(x,t){
      if(t){
          slideDom.setAttribute('style', 'transform: translate(' + x + 'px, 0px);transition:transform 300ms ease');
      }else{
          slideDom.setAttribute('style', 'transform: translate(' + x + 'px, 0px);transition:transform 0ms ease');
      }
       
  };
  // ***********************************
  setInterval(() => {
    imgIndex++
    if (imgIndex === 5) {
      imgIndex = 0
    }
    var random = Math.random() * 90
    new Block().createBlock(0, random, imgIndex)
  }, 1000)
  setInterval(() => {
    imgIndex++
    if (imgIndex === 5) {
      imgIndex = 0
    }
    var random = Math.random() * 90
    new Block().createBlock(0, random, imgIndex)
  }, 1000)
})()
window.onmousemove = function (e) {
  console.log(e)
}