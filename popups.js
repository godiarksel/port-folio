const modalBtn = document.querySelectorAll('#modal-open');
const closeModal = document.querySelector('#modal-close');
const modalOverlay = document.querySelector('#modal-overlay');
const modal = document.querySelector('.modal');

function openModal() {
  modal.style.display = 'block';
  modalOverlay.style.display = 'block';
}

function closePop() {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
}
for (let j = 0; j < modalBtn.length; j += 1) {
  modalBtn[j].addEventListener('click', openModal);
}

modalOverlay.onclick = closePop;
closeModal.onclick = closePop;