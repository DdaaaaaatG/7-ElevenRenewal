window.addEventListener('scroll', function() {
  let rightText = document.querySelector('.rightText');
  let textDesc = rightText.querySelectorAll('.textDesc');
  let leftImg = document.querySelectorAll('.leftCard > div'); 
  let windowHeight = window.innerHeight;/* \n현재 브라우저 창의 높이 */
  let scrollY = window.scrollY || window.pageYOffset; /* 현재 스크롤된 y축 위치 */
  /** 
   * leftImg[] : 카드 상단위치
   * */ 

  console.log(scrollY);
if(scrollY>=2600){
  rightText.style.opacity = '1';
  rightText.style.transition = 'opacity 0.3s ease';

  for (let i = 0; i < textDesc.length; i++) {
    textDesc[i].classList.remove('active');
 }
 
  if (windowHeight >= (leftImg[3].getBoundingClientRect().top+500)) {
    textDesc[3].classList.add('active');
  } 
  else if (windowHeight >= (leftImg[2].getBoundingClientRect().top+500)) {
    textDesc[2].classList.add('active');

  } 
  else if (windowHeight >= (leftImg[1].getBoundingClientRect().top+500)) {
    textDesc[1].classList.add('active');
    console.log("2");
    console.log(leftImg[1].getBoundingClientRect().top)
  } 
  else if (windowHeight >= (leftImg[0].getBoundingClientRect().top)) {
    textDesc[0].classList.add('active');
    console.log("1");
  }

}

else{
  rightText.style.opacity = `0`;
  rightText.style.transition = 'opacity 0s ease';
}

});