let sections = document.querySelectorAll('.packLunch, .packDesc, .otherService, .search, .startupHeadText, .rightText, .leftCard, .notice');

// 주어진 요소의 상위 요소로부터의 상대적인 거리를 계산하여 반환
function getOffsetTop(element) {
  let offsetTop = 0;
  while (element) {
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}

// 디바운스(debounce)
function debounce(func, delay) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
}

function handleScroll() {
  // 현재 스크롤 위치
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrollTop);
  // 각 섹션에 대한 처리
  sections.forEach(section => {
    if (section.classList.contains('packDesc')) {
      // packDesc 섹션인 경우
      // 섹션의 하단 가장자리 위치 계산
      let bottomOffset = getOffsetTop(section) + section.offsetHeight;

      // 섹션의 하단 가장자리에 도달했는지 확인하고 페이드 인 효과를 줌
      if (scrollTop + window.innerHeight >= bottomOffset) {
        section.classList.add('fade-in');
      } else {
        section.classList.remove('fade-in');
      }
    } else {
      // 다른 섹션인 경우

      // 섹션의 상단 가장자리와 하단 가장자리 사이에 위치한지 확인하고 페이드 인 효과를 줌
      let offsetTop = getOffsetTop(section);
      let height = section.offsetHeight;
      if (scrollTop + window.innerHeight >= offsetTop && scrollTop <= offsetTop + height) {
        section.classList.add('fade-in');
      } else {
        section.classList.remove('fade-in');
      }
    }
  });
}

// 디바운스된 스크롤 이벤트 핸들러 생성
let debouncedHandleScroll = debounce(handleScroll, 100);

window.addEventListener('scroll', debouncedHandleScroll);

handleScroll();
