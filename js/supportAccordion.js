let csFaqQuestion = document.querySelectorAll('.csFaqQuestion'), //wrap
csFaqQuestionHead = document.querySelectorAll('.csFaqQuestionHead'), //클릭 버튼
    csFaqContent = document.querySelectorAll('.csFaqContent'), //내용 펼쳐짐
    csFaqQuestionIcon = document.querySelectorAll('.csFaqQuestionIcon'),//q 색 변경
    csFaqQuestionArrow = document.querySelectorAll('.csFaqQuestionArrow');//화살표

  
for(let i=0; i<csFaqQuestionHead.length;i++){
  csFaqQuestionHead[i].addEventListener('click',function(e){
    const isActive = e.currentTarget.parentNode.classList.contains('active');
    for(let j=0; j<csFaqQuestion.length; j++){
      csFaqQuestion[j].classList.remove('active');
      csFaqQuestionArrow[j].classList.add('active');
    }
    if (!isActive) {
      e.currentTarget.parentNode.classList.add('active');
    }
  });
}
