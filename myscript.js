const mobBtn = document.querySelector('.mobile-navlist');
const linkBtn = document.querySelector('.mobile-navlist a');
const openMenu = document.querySelector('.openMenu');

function show() {
  openMenu.style.opacity = '0';
  mobBtn.style.left = '0';
}

function readmenu(num) {
  window.location.href = num;
  // const mobBtn = document.querySelector('.mobile-navlist');
  mobBtn.style.display = 'none';
  openMenu.style.opacity = '1';
}

openMenu.addEventListener('click', show);
mobBtn.addEventListener('click', show);
linkBtn.addEventListener('click', readmenu);