window.addEventListener('scroll', function() {
  let rightText = document.querySelector('.rightText');
  let textDesc = rightText.querySelectorAll('.textDesc');
  let leftImg = document.querySelectorAll('.leftCard > .leftCardImg');
  let windowHeight = window.innerHeight;
  let scrollY = window.scrollY || window.pageYOffset;
  let activeIndex = -1; //스크롤 범위 이전 확인용

  if (scrollY >= 4500) {

    // 각 이미지 요소의 위치 정보.
    let topOffsets = Array.from(leftImg).map(img => Math.floor(img.getBoundingClientRect().top)/2); //카드 기준 상단 값이니까.. 그것에 반을 나누고 +500하면 됨.
    let offsetThreshold = 700; // 추가적인 오프셋 임계값 설정
    //위로 스크롤할때 값을 새롭게 계산때려야함.
    for (let i = 0; i < textDesc.length; i++) {
      // 각 textDesc 요소에 대해 순회하며 스크롤 위치와의 비교
      if (windowHeight >= topOffsets[i] + offsetThreshold) {
        activeIndex = i; // active 클래스를 추가할 요소의 인덱스를 기록
      }
      textDesc[i].classList.remove('active'); // 모든 textDesc 요소에서 active 클래스를 제거
    }

    if (activeIndex >= 0) {
      textDesc[activeIndex].classList.add('active'); // active 클래스를 추가할 요소에 active 클래스를 추가
    }
  } 
  
  else {


    for (let i = 0; i < textDesc.length; i++) {
      textDesc[i].classList.remove('active'); // 모든 textDesc 요소에서 active 클래스를 제거
    }

    textDesc[0].classList.add('active'); // 스크롤 범위 이전에도 맨 처음 textDesc에 상시로 active 클래스를 추가
  }
});

/* 
윈도우 리사이즈를 넣어서
반응형일땐 기존 효과를 없애고
단지 페이드인만 넣기 시도.
*/


/* 
1.스크롤 이벤트가 발생하면 이벤트 핸들러 함수가 실행.
2.rightText, textDesc, leftImg 등의 요소들을 변수에 저장.
3.현재 윈도우의 높이와 스크롤 위치를 가져옴.
4.스크롤 위치가 지정된 범위에 들어왔는지 확인.
5.스크롤 범위에 진입한 경우, 오른쪽 텍스트 영역의 투명도와 트랜지션을 설정.
6.왼쪽 이미지 요소들의 위치 정보를 가져옴.
7.각 textDesc 요소에 대해 순회하며 스크롤 위치와 비교하여 active 클래스를 추가할 요소의 인덱스를 결정.
8.모든 textDesc 요소에서 active 클래스를 제거.
9.activeIndex 값이 0 이상인 경우 해당 인덱스에 active 클래스를 추가.
10.activeIndex 값이 0 미만인 경우, 즉 스크롤 범위 이전에도 맨 처음의 textDesc 요소에 상시로 active 클래스를 추가.
11.스크롤 범위 이전에 있는 경우, 오른쪽 텍스트 영역의 투명도를 0으로 설정하여 보이지 않도록.
12.모든 textDesc 요소에서 active 클래스를 제거.
13.맨 처음의 textDesc 요소에 상시로 active 클래스를 추가.

*/

/* 
let topOffsets = Array.from(leftImg).map(img => img.getBoundingClientRect().top);는 leftImg에 있는 각 이미지 요소의 상단 위치(top)를 가져와 배열로 저장하는 코드. 이를 통해 각 이미지 요소의 위치 정보를 기록할 수 있음.

여기서 leftImg는 document.querySelectorAll('.leftCard > div')로 선택된 이미지 요소들을 나타냄. Array.from() 메서드를 사용하여 NodeList를 배열로 변환한 후, map() 메서드를 사용하여 각 이미지 요소에 대해 실행되는 함수를 적용.

img => img.getBoundingClientRect().top 함수는 각 이미지 요소에 대해 실행. getBoundingClientRect() 메서드는 해당 요소의 위치와 크기 정보를 제공. 그 중에서도 .top 속성은 해당 요소의 상단 위치를 나타냄.

따라서 map() 메서드를 통해 각 이미지 요소의 .getBoundingClientRect().top 값을 배열에 저장. 이렇게 저장된 topOffsets 배열은 스크롤 이벤트에서 사용되어 스크롤 위치와의 비교를 통해 active 클래스를 적용할 위치를 결정.


*/