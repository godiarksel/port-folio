let modalBtn = document.querySelector('#modal-open button');
let closeModal = document.querySelector('#modal-close img');
let modalOverlay = document.querySelector('.modal-overlay');
let modal = document.querySelector('.modal');
// console.log(modalBtn);

// modalBtn.forEach(button => {
//   button.addEventListener('click', () => {
//     modalOpen()
//   })
function openModal() {
  modal.classList.add('active');
  modalOverlay.classList.add('active');
}

function closePop() {
  modal.classList.remove('active');
  modalOverlay.classList.remove('active');
}

// })
modalBtn.addEventListener('click',openModal);
modalOverlay.addEventListener('click',closePop);
closeModal.addEventListener('click',closePop);

// modalOverlay.addEventListener('click', () => {
//     closeModal()
//   })


// closeModal.forEach(button => {
//   button.addEventListener('click', () => {
//     closeModal()
//   })
// })


