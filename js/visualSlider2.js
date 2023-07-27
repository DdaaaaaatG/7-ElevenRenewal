let visualWrap = document.querySelector('.visual'),
  slider = visualWrap.querySelector('.sliderBanner'),
  sliderList = slider.querySelectorAll('li'),
  arrowButton = document.querySelector('.arrowBtn');

// 변수 초기화
let currentIdx = 1,
  translate = 0;

const speedTime = 500;

// 복제(클론)
const cloneFirst = sliderList[0].cloneNode(true); // 맨 앞에 있는 것 복사
const cloneLast = sliderList[sliderList.length - 1].cloneNode(true); // 맨 뒤에 있는 것 복사
slider.appendChild(cloneFirst); // 뒤에다가 맨 앞 슬라이드 넣기
slider.insertBefore(cloneLast, sliderList[0]); // 앞에다가 맨 뒤 슬라이드 넣기
// "5" 1 2 3 4 5 "1" <<이렇게 복제함

// 슬라이더 크기와 움직이는 수치 조정 (초기값)
const sliderCloneList = slider.querySelectorAll('li');
let listWidth = sliderList[0].clientWidth + 40; // gap값 포함 슬라이드 크기
let sliderWidth = listWidth * sliderCloneList.length; // 전체 슬라이드 크기
slider.style.width = `${sliderWidth}px`;
translate = -listWidth; // -값이 되어야 왼쪽으로 옴
slider.style.transform = `translateX(${translate}px)`
currentIdx = 1;

// 버튼 클릭 리스너
arrowButton.addEventListener('click', activeSlide);

// 슬라이더 크기를 업데이트하는 함수
function updateSliderSize() {
  listWidth = sliderList[0].clientWidth + 40; // gap값 포함 슬라이드 크기
  sliderWidth = listWidth * sliderCloneList.length; // 전체 슬라이드 크기
  slider.style.width = `${sliderWidth}px`;
  translate = -listWidth * currentIdx; // 슬라이더 크기가 업데이트될 때 현재 인덱스에 맞게 위치를 업데이트해야 합니다.
  slider.style.transform = `translateX(${translate}px)`;
}

// 슬라이드가 이동되는 함수
function moveSlide(i) {
  currentIdx += (-1 * i);
  translate += listWidth * i;
  slider.style.transform = `translateX(${translate}px)`;
  slider.style.transition = `all ${speedTime}ms ease`;
}

// 버튼 클릭시 슬라이드 active
function activeSlide(e) {
  e.preventDefault();
  stopAutoSlide(); // 버튼 클릭시 오토슬라이드 멈춤
  if (e.target.className === `vBtn visualNext`) {
    moveSlide(-1);
    if (currentIdx === sliderCloneList.length - 1) {
      setTimeout(() => {
        slider.style.transition = 'none';
        currentIdx = 1;
        translate = -listWidth;
        slider.style.transform = `translateX(${translate}px)`;
        startAutoSlide(); // 슬라이드가 롤백된 후에 오토슬라이드 재시작
      }, speedTime);
    } else {
      startAutoSlide(); // 슬라이드 이동 후에도 오토슬라이드 재시작
    }
  } else {
    moveSlide(1);
    if (currentIdx === 0) {
      setTimeout(() => {
        slider.style.transition = 'none';
        currentIdx = sliderCloneList.length - 2;
        translate = -(listWidth * currentIdx);
        slider.style.transform = `translateX(${translate}px)`;
        startAutoSlide(); // 슬라이드가 롤백된 후에 오토슬라이드 재시작
      }, speedTime);
    } else {
      startAutoSlide(); // 슬라이드 이동 후에도 오토슬라이드 재시작
    }
  }
}

let autoSlideTimer = null; // 오토슬라이드 타이머 변수

function startAutoSlide() {
  if (autoSlideTimer === null) {
    autoSlideTimer = setInterval(function () {
      moveSlide(-1);
      if (currentIdx === sliderCloneList.length - 1) {
        setTimeout(() => {
          slider.style.transition = 'none';
          currentIdx = 1;
          translate = -listWidth;
          slider.style.transform = `translateX(${translate}px)`;
        }, speedTime);
      }
    }, 3500);
  }
}

function stopAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = null; // 오토슬라이드 타이머 초기화
}

// 페이지 로드 후 오토슬라이드 시작
startAutoSlide();

// 윈도우 리사이즈 이벤트 리스너 등록
window.addEventListener('resize', function(){
  updateSliderSize();
});
