const mobMenu = document.querySelector('.mobile-navlist');
const linkBtn = document.querySelector('.mobile-navlist a');
const openMenu = document.querySelector('.openMenu');
const navMenu = document.querySelector('navbar-container');

function show() {
  // openMenu.style.opacity = '0';
  mobMenu.style.left = '0';
}

function readmenu(num) {
  window.location.href = num;
  // const mobBtn = document.querySelector('.mobile-navlist');
  mobMenu.style.left = '100%';
  navMenu.classList.toggle = 'navbar-container';
}

openMenu.addEventListener('click', show);
linkBtn.addEventListener('click', readmenu);