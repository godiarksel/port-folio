const openMenu = document.querySelector('.openMenu');
const mobBtn = document.querySelector('.mobile-navlist');

openMenu.addEventListener('click', show);
mobBtn.addEventListener('click', show);



function show(){
  openMenu.style.display = 'none';
  mobBtn.style.left = '0';
}
function readmenu (){
  window.location.href = '#work-section';
  const mobBtn = document.querySelector('.mobile-navlist');
  mobBtn.style.display = 'none';
  }