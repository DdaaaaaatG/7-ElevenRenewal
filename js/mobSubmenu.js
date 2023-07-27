let mobcontent = document.querySelectorAll('.mobcontent'), //wrap
    collapsible = document.querySelectorAll('.collapsible'), //클릭 버튼
    content = document.querySelectorAll('.content'), //내용 펼쳐짐
    colarrow = document.querySelectorAll('.collapsible>.colarrow');//화살표
/* 
collapsible 를 클릭하면
content가 펼쳐짐, colarrow.active 됨.
content active는 mobcontent에게 붙음(mobcontent.active)
*/
for(let i=0; i<collapsible.length;i++){
  collapsible[i].addEventListener('click',function(e){

    const isActive = e.currentTarget.parentNode.classList.contains('active');
    for(let j=0; j<mobcontent.length; j++){
      mobcontent[j].classList.remove('active');
      colarrow[j].classList.add('active');
    }
    if (!isActive) {
      e.currentTarget.parentNode.classList.add('active');
    }
    console.log(mobcontent);
  });

}

