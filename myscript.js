const openMenu = document.querySelector('.openMenu');
const mobBtn = document.querySelector('.mobile-navlist');


openMenu.addEventListener('click', show);
mobBtn.addEventListener('click', show);


function show(){
  openMenu.style.display = 'none';
  mobBtn.style.left = '0';
}
function readmenu (num){
  window.location.href = num;
  const mobBtn = document.querySelector('.mobile-navlist');
  mobBtn.style.display = 'none';
  openMenu.style.display = ' ';
  }