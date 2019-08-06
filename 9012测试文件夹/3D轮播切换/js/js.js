{
let oWrap = document.getElementsByClassName('wrap')[0],
    oImgList = document.getElementsByClassName('img-list')[0],
    aLiItem = oImgList.getElementsByTagName('li'),
    oImgBox = document.getElementsByClassName('img-box')[0],
    oPrev = document.getElementsByClassName('prev')[0],
    oNext = document.getElementsByClassName('next')[0],
    aBtn = document.getElementsByClassName('btn')[0].getElementsByTagName('li'),
    oCss = document.getElementById('css'),
    countLi =8*5,
    arrSide = ['up','down','left','right'],
    last = 0,
    arrLi = [],
    t = new Date(),
    timer;
let init = function(){
    //生成li正方体
    for (let i = 0; i < countLi; i++) {
      let oLi = document.createElement('li');
      let [x,y] = [i%8,Math.floor(i/8)];
      oLi.style.animationDelay = `${i*15}ms`;
      oLi.innerHTML = `<div class="front"></div>
                      <div class="bottom"></div>
                      <div class="top"></div>
                      <div class="left"></div>
                      <div class="right"></div>
                      <div class="back"></div>`;
      oImgBox.appendChild(oLi);
      arrLi.push(oLi);
      let aDiv = oLi.getElementsByTagName('div');
      for (let j = 0; j < aDiv.length; j++) {
        aDiv[j].style.backgroundPosition = `${-x*90}px ${-y*90}px`;
      }
    }
}

let turn = function(index){
  if(new Date()-t<2000) return;
  t = new Date();
  oCss.innerHTML = `.wrap .img-box li .front\{
    background-image: url("images/${last+1}.jpg");
  \}
  .wrap .img-box li div+div\{
    background-image: url("images/${index+1}.jpg");
  \}`;
  aLiItem[last].classList.remove('show');
  oImgList.classList.add('hide');
  aBtn[last].classList.remove('on');
  aBtn[index].classList.add('on');
  for (let i = 0; i < countLi; i++) {
    let side = arrSide[Math.floor(Math.random()*4)]
    arrLi[i].side = side;
    arrLi[i].classList.add(side);
  }
  last=index;
  setTimeout(function(){
    aLiItem[index].classList.add('show');
    oImgList.classList.remove('hide');
    oCss.innerHTML = `.wrap .img-box li div{
      background-image: url("images/${index+1}.jpg");
    }`;
    for (let i = 0; i < countLi; i++) {
      arrLi[i].classList.remove(arrLi[i].side);
    }
  },2000);
}
let regEvent = function(){
  oPrev.onclick = function(){
    let i = (last-1)<0?5:last-1;
    turn(i);
  }
  oNext.onclick = function(){
    let i = (last+1)%6;
    turn(i);
  }
  oWrap.onmouseenter = function(){
    console.log(timer);
    clearTimeout(timer);
  }
  oWrap.onmouseleave = function(){
    timer = setTimeout(rander,3000);
  }

  for (let i = 0; i < aBtn.length; i++) {
    aBtn[i].onclick = turn.bind(aBtn[i],i)
  }
}
init();
regEvent();
function rander(){
  let i = (last+1)%6;
  turn(i);
  timer = setTimeout(rander,4000);
}
timer = setTimeout(rander,2000);
}
