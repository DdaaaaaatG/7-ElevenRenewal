let productMenu = document.querySelector('.productMenu'), //fixed 붙음
    productGnbList = document.querySelector('.productMenuInner>.productGnb>li');

window.addEventListener('scroll', function(){
  gnbScrollActive();
});

function gnbScrollActive(){
  let scrollY = window.scrollY || window.pageYOffset;
  if(scrollY>=300){
    productMenu.classList.add('fixed');
  }
  else{
    productMenu.classList.remove('fixed');
  }
}