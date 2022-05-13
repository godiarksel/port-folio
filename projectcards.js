const workSection = document.querySelector('#work-section');

const workCards = [
  {
    container: "tonic-container",
    image: "images/tonic-portfolio.png",
    name: "Tonic",
    role: ["CANOPY", "Back End Dev", 2015],
    description: "A daily selection of privately personalized reads no accounts or sign-ups required.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["images/html-tag.png", "images/css-tag.png", "images/javascript-tag.png"],
    liveLink: "https://godiarksel.github.io/port-folio/",
    sourceLink: "https://github.com/godiarksel/port-folio",
    alt: ["tonic", "html-tag", "css-tag", "javascript-tag"]
  },
  {
    container: "tonic-container0",
    image: "images/multi-post-portfolio.png",
    name: "Multi-Post Stories",
    role: ["CANOPY", "Back End Dev", 2015],
    description: "A daily selection of privately personalized reads no accounts or sign-ups required.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["images/html-tag.png", "images/css-tag.png", "images/javascript-tag.png"],
    liveLink: "https://godiarksel.github.io/port-folio/",
    sourceLink: "https://github.com/godiarksel/port-folio",
    alt: ["multi-post-portfolio", "html-tag", "css-tag", "javascript-tag"]
  },
  {
    container: "tonic-container",
    image: "images/tonic2.png",
    name: "Tonic",
    role: ["CANOPY", "Back End Dev", 2015],
    description: "A daily selection of privately personalized reads no accounts or sign-ups required.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["images/html-tag.png", "images/css-tag.png", "images/javascript-tag.png"],
    liveLink: "https://godiarksel.github.io/port-folio/",
    sourceLink: "https://github.com/godiarksel/port-folio",
    alt: ["tonic", "html-tag", "css-tag", "javascript-tag"]
  },
  {
    container: "tonic-container0",
    image: "images/multi-post-stories2.png",
    name: "Multi-Post Stories",
    role: ["CANOPY", "Back End Dev", 2015],
    description: "A daily selection of privately personalized reads no accounts or sign-ups required.",
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    technologies: ["images/html-tag.png", "images/css-tag.png", "images/javascript-tag.png"],
    liveLink: "https://godiarksel.github.io/port-folio/",
    sourceLink: "https://github.com/godiarksel/port-folio",
    alt: ["multi-post-stories2", "html-tag", "css-tag", "javascript-tag"]
  }
];
let cards = "";
for (let i = 0; i < workCards.length; i += 1) {
  cards += `
  <div class="${workCards[i].container}">
  <div class="tonic-container1"><img src="${workCards[i].image}" alt="${workCards[i].alt[0]}"></div>
  <div class="tonic-container2">
      <h3 class="tonic-heading">${workCards[i].name}</h3>
      <div class="canopy-container">
          <ul>
          <li class="canopy-header"><p>${workCards[i].role[0]}</p></li>  
          <li class="canopy-img"><img src="images/counter.png" alt="counter"></li>
          <li class="canopy-text">${workCards[i].role[1]}</li>
          <li class="canopy-img"><img src="images/counter.png" alt="counter"></li>
          <li class="canopy-text">${workCards[i].role[2]}</li>
      </ul>
      </div>
      <div class="tonic-parag">
          <p>
          ${workCards[i].description}
          </p>
      </div>
      <div class="tonic-icons-container">
          <ul>
              <li><img src="${workCards[i].technologies[0]}" alt="${workCards[i].alt[1]}"></li>
              <li><img src="${workCards[i].technologies[1]}" alt="${workCards[i].alt[2]}"></li> 
              <li><img src="${workCards[i].technologies[2]}" alt="${workCards[i].alt[3]}"></li> 
         </ul>
      </div>
      <div class="tonic-btn">
          <button id="modal-open" type="button">See Project</button>
      </div>
    </div>
    </div>

    <div class="modal">
    <div>
        <div class="modal_heading">
         <h3>${workCards[i].name}</h3>
         <img id="modal-close" src="images/cancel-icon2.png" alt="cancel-icon">
        </div>
        
        <div class="canopy-container">
            <ul>
            <li class="canopy-header"><p>${workCards[i].role[0]}</p></li>  
            <li class="canopy-img"><img src="images/counter.png" alt="counter"></li>
            <li class="canopy-text">${workCards[i].role[1]}</li>
            <li class="canopy-img"><img src="images/counter.png" alt="counter"></li>
            <li class="canopy-text">${workCards[i].role[2]}</li>
        </ul>
        </div>
        <div class="modal_image"><img src="${workCards[i].image}" alt="${workCards[i].alt[0]}"></div>
        <div class="desk-modal__content">
        <div class="tonic-parag">
            <p>
            ${workCards[i].content}
            </p>
        </div>
        <div class="desk-modal__content__iconsbtn">
        <div class="tonic-icons-container">
            <ul>
            <li><img src="${workCards[i].technologies[0]}" alt="${workCards[i].alt[1]}"></li>
            <li><img src="${workCards[i].technologies[1]}" alt="${workCards[i].alt[2]}"></li> 
            <li><img src="${workCards[i].technologies[2]}" alt="${workCards[i].alt[3]}"></li> 
           </ul>
        </div>
        <div class="modal_btn">
        <div class="tonic-btn">
            <button id = "liveBtn" type="button">See Live
            </button>
        </div>
        <div class="tonic-btn">
        <button id="sourceBtn" type="button"> See Source
        </button>
       </div>
        </div>
     </div>
     </div>
      </div>
    </div>  `;
  }
workSection.innerHTML += cards;