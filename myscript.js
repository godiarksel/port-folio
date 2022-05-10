const mobBtn = document.querySelector('.mobile-navlist');
const linkBtn = document.querySelector('.mobile-navlist a');

function readmenu(num) {
  window.location.href = num;
  // const mobBtn = document.querySelector('.mobile-navlist');
  mobBtn.style.display = 'none';
}

const openMenu = document.querySelector('.openMenu');

function show() {
  openMenu.style.display = 'none';
  mobBtn.style.left = '0';
}

openMenu.addEventListener('click', show);
mobBtn.addEventListener('click', show);
linkBtn.addEventListener('click', readmenu);