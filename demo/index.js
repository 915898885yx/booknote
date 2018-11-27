(function () {
  var imgIndex = 0
  var isStop = false
  var tipValue = ''
  var interval1 = 1500
  var interval = 800
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
  };
  //滑动过程中
  function touchmove(e){
      e.preventDefault();//阻止默认行为
      var point = getPoint(e);
      if (point.pageX <= 100) {
        domove(-200);
        return false
      } else if (point.pageX >= 880) {
        domove(600);
        return false
      }
      window.moveX = point.pageX;
      window.deltaX = window.moveX - 300; //  - window.startX
      domove(window.deltaX+window.prevX);
  };
  //结束滑动
  function touchend(e){
      var x = Math.abs(window.deltaX);
      if(index >= (length-1)){
          index = length-1;
      }
      if(index <0 ){
          index = 0;
      }
  };
  //默认以第一个手指的位置计算
  function getPoint(e) {
      return e.touches ? e.touches[0] : e;
  };
  //利用transform移动
  function domove(x,t = false){
      if(t){
          slideDom.setAttribute('style', 'transform: translate(' + x + 'px, 0px);transition:transform 300ms ease');
      }else{
          slideDom.setAttribute('style', 'transform: translate(' + x + 'px, 0px);transition:transform 0ms ease');
      }
       
  };
  // 石头部分
  function Block () {
    this.timer = ''
    this.speed = 10
    this.dom = ''
    this.man = document.getElementById('img')
    this.bgList = [
      {name: '安装费心', url: './images/1.png', index:0},
      {name: '服务差', url: './images/2.png', index:1},
      {name: '价格虚高', url: './images/3.png', index:2},
      {name: '建材劣质', url: './images/4.png', index:3},
      {name: '投诉无门', url: './images/5.png', index:4}
    ],
    this.tipContent = [
      '<br>&nbsp;&nbsp;&nbsp;&nbsp;“年轻帅气” “话<br>好” “态度还好” 的安装<br>小哥哥，让你省时，省心',
      '<br>呐！做人最重要的就是<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;开心啦！<br>在新博新美你说了算',
      '<br>去你的天价，我不会再让你<br/>去多花一分冤枉钱',
      '<br>放开辣个被产品质量困<br>扰的年轻人，从今天<br>起，我不会让他伤心！',
      '<br>在遭遇了无数的“惹不<br>起”后，你的事情我来<br>负责'
    ]
  }
  Block.prototype = {
    createBlock (top = 0, left = 0, imgIndex = 0) { // 创建一个石头
      this.dom = document.createElement('div')
      this.dom.zvalue = `${this.bgList[imgIndex].name}`
      this.dom.index = `${this.bgList[imgIndex].index}`
      oStyle = this.dom.style
      oStyle.height = '118px'
      oStyle.width = '118px'
      oStyle.position = 'absolute'
      oStyle.left = left + 'vw'
      oStyle.top = top + 'px'
      oStyle.background = `url(${this.bgList[imgIndex].url})`
      document.getElementById('container').appendChild(this.dom)
      this.moveBottom.call(this)
    },
    moveBottom () { // 石头向下移动
      this.timer = setInterval(() => {
        if (isStop) {
          clearInterval(newBlock)
          clearInterval(newBlock1)
          clearInterval(this.timer)
          return false
        }
        var manLeft = this.man.getBoundingClientRect().left
        var manTop = this.man.getBoundingClientRect().top
        var domLeft = this.dom.getBoundingClientRect().left
        var domTop = this.dom.getBoundingClientRect().top
        var distance = Math.sqrt(Math.pow(manLeft - domLeft, 2) + Math.pow(manTop - domTop, 2))
        if (distance <= 120) {
          isStop = true
          document.getElementById('img').src = './images/dieman.png'
          document.getElementsByClassName('tipvalue')[0].innerHTML = this.tipContent[this.dom.index]
          document.getElementsByClassName('tips')[0].style.display = 'block'
          document.getElementsByClassName('tip')[0].style.display = 'block'
          document.getElementsByClassName('tip')[0]
          .getElementsByClassName('tipContent')[0].style.display = 'block'
        }
        this.dom.style.top = this.dom.offsetTop + 8 + 'px'
        if (this.dom.offsetTop >= 3000) { // 超出删除当前元素，减少页面的dom
          clearInterval(this.timer)
          this.removeBlock.call(this)
        }
      }, 20)
    },
    removeBlock () {
      document.getElementById('container').removeChild(this.dom)
    }
  }
  // ***********************************
  var newBlock = setInterval(() => {
    imgIndex++
    if (imgIndex === 5) {
      imgIndex = 0
    }
    var random = Math.random() * 90
    new Block().createBlock(0, random, imgIndex)
  }, interval)
  var newBlock1 = setInterval(() => {
    imgIndex++
    if (imgIndex === 5) {
      imgIndex = 0
    }
    var random = Math.random() * 90
    new Block().createBlock(0, random, imgIndex)
  }, interval1)
})()
// 加入微信
function jionchat () {
  document.getElementsByClassName('tip')[0]
  .getElementsByClassName('tipContent')[0].style.display = 'none'
  document.getElementsByClassName('tip')[0]
  .getElementsByClassName('qrcode')[0].style.display = 'block'
}
// 分享盆友圈
function share () {
  document.getElementsByClassName('tip')[0]
  .getElementsByClassName('tipContent')[0].style.display = 'none'
  document.getElementsByClassName('tip')[0]
  .getElementsByClassName('choose')[0].style.display = 'block'
}
function close1 (){
  console.log('11111')
  document.getElementsByClassName('tips')[0].style.display = 'none'
  document.getElementsByClassName('tip')[0].style.display = "none"
  window.location.reload()
}