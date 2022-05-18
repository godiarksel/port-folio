const modalOverlay = document.querySelector('#modal-overlay');
const workSection = document.querySelector('#work-section');

workSection.addEventListener('click', (e) => {
  e.preventDefault();

  const modalBtn = e.target.closest('.modal-open');
  if (!modalBtn) return;

  const modal = modalBtn.parentNode.parentNode.parentNode.nextElementSibling;
  modal.classList.add('is-open');
  modalOverlay.classList.add('is-open');
  const closeBtn = document.querySelectorAll('.modal-close');
  for (let i = 0; i < closeBtn.length; i += 1) {
    closeBtn[i].addEventListener('click', () => {
      modal.classList.remove('is-open');
      modalOverlay.classList.remove('is-open');
    });
  }
});