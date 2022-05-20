const mobMenu = document.querySelector('.mobile-navlist');
const linkBtn = document.querySelector('.mobile-navlist a');
const openMenu = document.querySelector('.openMenu');
const navMenu = document.querySelector('navbar-container');
const form = document.querySelector('#form');
const errorMsg = document.querySelector('.error-msg');
const userEmail = document.querySelector('#email');

function show() {
  mobMenu.style.left = '0';
}

function readmenu(num) {
  window.location.href = num;
  mobMenu.style.left = '100%';
  navMenu.classList.toggle = 'navbar-container';
}

openMenu.addEventListener('click', show);
linkBtn.addEventListener('click', readmenu);
form.addEventListener('submit', (e) => {
  const errorMsgs = [];
  if (userEmail.value !== userEmail.value.toLowerCase()) {
    errorMsgs.push('Submission failed. Your email should be in lower case');
  }

  if (errorMsgs.length > 0) {
    e.preventDefault();
    errorMsg.innerText = errorMsgs.join('');
  }
});