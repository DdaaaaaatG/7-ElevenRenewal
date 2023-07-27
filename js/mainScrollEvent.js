let lunch = document.querySelector('.packLunch');
let other = document.querySelector('.otherService');
let search = document.querySelector('.search');
let startup = document.querySelector('.startup');
let notice = document.querySelector('.notice');

// 섹션의 화면 상단에서의 오프셋 값을 계산
function getOffsetTop(element) {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}

// 디바운싱 함수를 생성
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

// 스크롤 이벤트
function handleScroll() {
  // 현재 스크롤 위치를 가져옴
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // 각 섹션의 화면 상단에서의 오프셋 값을 계산
  let lunchOffset = getOffsetTop(lunch);
  let otherOffset = getOffsetTop(other);
  let searchOffset = getOffsetTop(search);
  let startupOffset = getOffsetTop(startup);
  let noticeOffset = getOffsetTop(notice);

  // 화면에 보이는 섹션의 표시 여부
  let isVisible = function(offset, height) {
    return scrollTop + window.innerHeight >= offset && scrollTop <= offset + height;
  };

  // 섹션의 표시 여부를 확인하고, 페이드 인 효과를 적용
  if (isVisible(lunchOffset, lunch.offsetHeight)) {
    lunch.classList.add('fade-in');
    console.log(lunch);
  }
  if (isVisible(otherOffset, other.offsetHeight)) {
    other.classList.add('fade-in');
    console.log(other);
  }
  if (isVisible(searchOffset, search.offsetHeight)) {
    search.classList.add('fade-in');
    console.log(search);
  }
  if (isVisible(startupOffset, startup.offsetHeight)) {
    startup.classList.add('fade-in');
    console.log(startup);
  }
  if (isVisible(noticeOffset, notice.offsetHeight)) {
    notice.classList.add('fade-in');
    console.log(notice);
  }
}

// 디바운싱된 스크롤 이벤트 핸들러를 생성
let debouncedHandleScroll = debounce(handleScroll, 100);

// 스크롤 이벤트에 디바운싱된 핸들러를 등록
window.addEventListener('scroll', debouncedHandleScroll);

// 초기에 한 번 핸들러를 실행하여 현재 화면에 보이는 섹션에 페이드 인 효과를 적용
handleScroll();

/* 
페이드인 애니메이션을 css로 한번 만들어보기.
안돼면 라이브러리 AOS를 깔아서 적용.
*/