const modalOverlay = document.querySelector('#modal-overlay');
const workSection = document.querySelector('#work-section');

workSection.addEventListener('click', (e)=> {
  e.preventDefault()

  const modalBtn = e.target.closest('.modal-open');
  
  if (!modalBtn) return;

  const modal = modalBtn.parentNode.parentNode.parentNode.nextElementSibling
  
  modal.classList.add('is-open');
  modalOverlay.classList.add('is-open');
  const closeBtn = document.querySelectorAll('.modal-close');
    
  for (let i = 0; i < closeBtn.length; i++){
    closeBtn[i].addEventListener('click', () =>{
      modal.classList.remove('is-open');
      modalOverlay.classList.remove('is-open');
    })
  }

})























// export function openModal(id) {
//   console.log('redners first');
//   for (let work of works ) {
//     if ( work['id'] == id){
//       workSection.innerHTML += `
//     <div class="modal">
//       <div>
//         <div class="modal_heading">
//           <h3>${work.name}</h3>
//         <img id="modal-close" src="images/cancel-icon2.png" alt="cancel-icon">
//       </div>
    
//       <div class="canopy-container">
//         <ul>
//           <li class="canopy-header"><p>${work.role[0]}</p></li>  
//           <li class="canopy-img"><img src="images/counter.png" alt="counter"></li>
//           <li class="canopy-text">${work.role[1]}</li>
//           <li class="canopy-img"><img src="images/counter.png" alt="counter"></li>
//           <li class="canopy-text">${work.role[2]}</li>
//         </ul>
//       </div>
//       <div class="modal_image"><img src="${work.image}" alt="${work.alt[0]}"></div>
//       <div class="desk-modal__content">
//       <div class="tonic-parag">
//         <p>
//         ${work.content}
//         </p>
//       </div>
//       <div class="desk-modal__content__iconsbtn">
//       <div class="tonic-icons-container">
//         <ul>
//           <li><img src="${work.technologies[0]}" alt="${work.alt[1]}"></li>
//           <li><img src="${work.technologies[1]}" alt="${work.alt[2]}"></li> 
//           <li><img src="${work.technologies[2]}" alt="${work.alt[3]}"></li> 
//         </ul>
//       </div>
//       <div class="modal_btn">
//         <div class="tonic-btn">
//         <button id = "liveBtn" type="button">See Live
//         </button>
//       </div>
//       <div class="tonic-btn">
//         <button id="sourceBtn" type="button"> See Source
//           </button>
//       </div>
//     </div>
//  </div>
//  </div>
//   </div> `;
//     }
//   }
// }


