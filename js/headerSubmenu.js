let header = document.querySelector('header'),
    headerGnb = document.querySelector('.headerGnb'),
    destopGnb = headerGnb.querySelectorAll('.destopGnb>li'),
    destopSubBg = document.querySelector('.destopSubBg'),
    lnb = document.querySelectorAll('.lnb'),
    firstSelect = document.querySelector('.firstSelect'),
    language = document.querySelector('.language');
let isDesktop = true; // 반응형 확인
let isMouseOver = false; //마우스가 메뉴 영역에 있는지 확인

/* headerLanguage에 있는 firstSelect를 누르면 language에 액티브 붙음*/
firstSelect.addEventListener('click', function(){
  language.classList.toggle('active');
});
//스크롤 이벤트(데스크톱,반응형)
window.addEventListener('scroll', function(){
  if(isDesktop){
    desktopScorllActive();
  }
  else if(!isDesktop){
    mobHeaderActive();
  }
});

function desktopScorllActive(){
  let headerTop = document.querySelector('.headerTop');
  let scrollY = window.scrollY || window.pageYOffset;
  if(scrollY >= 30){
    header.classList.add('active');
    headerTop.style.opacity = '0';
  } else{
    header.classList.remove('active');
    headerTop.style.opacity = '1';
  }
}

function lnbActive(){
  destopSubBg.classList.add('active');
  for(let i = 0; i<lnb.length; i++){
    lnb[i].classList.add('active');
  }
}

function lnbReset(){
  destopSubBg.classList.remove('active');
  for(let i = 0; i<lnb.length; i++){
    lnb[i].classList.remove('active');
  }
}
//마우스가 영역에 들어갈시 작동
function handleMouseover(){
  if(isDesktop){
    lnbActive();
  }
}
//마우스가 영역 밖일시 작동
function handleMouseout(e){
  if(isDesktop && !headerGnb.contains(e.relatedTarget)){
    lnbReset();
  }
}

headerGnb.addEventListener('mouseover', function (event) { //마우스 호버 
  isMouseOver = true;
  handleMouseover();
});

headerGnb.addEventListener('mouseout', function (e) {//마우스 아웃
  isMouseOver = false;
  handleMouseout(e);
});
//반응형 헤더

//반응형 변수 불러옴
let mobMenuBtn = document.querySelectorAll('.mobMenuBtn, .mobClose'), //햄버거 버튼
    mobMenu = document.querySelector('.mobMenu'), //메뉴 감싼 wrap임
    mobHeaderChage = mobMenu.querySelector('.mobHeaderChage'), //로고랑 버튼있는곳 색깔 채우는 애니메이션 보여줄려고
    mobGnb = mobMenu.querySelector('.mobGnb'), //gnb나오고 누르면 서브메뉴들이 아코디언 형식으로 나올거임
    mobTopMenu = mobMenu.querySelector('.mobTopMenu');//고객센터 채용안내 점주인증 그걸 버튼형식으로 보이도록 할거임 
let isClick = false;
//스크롤 내릴때 add 하는 함수 생성
function mobHeaderActive(){
  let mobileGnb = document.querySelector('.mobileGnb'); //헤더부분 크기 변경용
  let scrollY = window.scrollY || window.pageYOffset;
  if(scrollY >= 30){
    header.classList.add('active');
    mobileGnb.classList.add('active');
  } else{
    header.classList.remove('active');
    mobileGnb.classList.remove('active');
  }
}
//햄버거 버튼 누를때 일어나는 일
function menuBtnClickEvent(){
  if(!isClick){
    mobMenu.classList.add('active');
    isClick = true
  }
  else if(isClick){
    mobMenu.classList.remove('active');
    isClick = false
  }
}
mobMenuBtn.forEach(function(item){
  item.addEventListener('click',function(){
    menuBtnClickEvent()
  })
});



function checkWindowSize() {//창의 크기를 확인. 데스크톱 모드인지 확인
  let windowInner = window.innerWidth;
  if (windowInner >= 965) {
      isDesktop = true;
      mobMenu.classList.remove('active');
      isClick = false
      if (isMouseOver) {
          lnbActive();
      } else {
          lnbReset();
      }
  } else { //창의 너비가 965 미만이면 서브메뉴의 높이를 초기화
      isDesktop = false;
      lnbReset();
  }
}

window.addEventListener('resize', checkWindowSize); 
//창 크기 변경시 checkWindowSize 호출
checkWindowSize();