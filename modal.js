const popUp = document.querySelector('.popup');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const seeProjectBtn = document.querySelectorAll('.see-project');
const detailSection = document.querySelector('.detail-section');
console.log(seeProjectBtn);


const data = [
  {
    id: 'project-1',
    title: 'Tonic',
    canopy: 'Canopy',
    html: 'html',
    css: 'css',
    javascript: 'javasctipt',
    image1: 'images/Snapshoot1.png',
    image2: 'images/desktop/Snapshoot-Portfolio.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  {
    id: 'project-2',
    title: 'Multi-Post Stories',
    image: 'images/Snapshoot2.png',
    canopy: 'Canopy',
    html: 'html',
    css: 'css',
    javascript: 'javasctipt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  {
    id: 'project-3',
    title: 'Tonic',
    canopy: 'Canopy',
    image: 'images/Snapshoot3.png',
    html: 'html',
    css: 'css',
    javascript: 'javasctipt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
  {
    id: 'project-4',
    name: 'Multi-Post Stories',
    canopy: 'Canopy',
    image: 'images/Snapshoot4.png',
    html: 'html',
    css: 'css',
    javascript: 'javasctipt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
];

seeProjectBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
      console.log('click');
    popUp.style.display = 'block';
    modal.style.display = 'block';
  });
});closeModal.addEventListener('click', () => {
  console.log('remove');
  popUp.style.display = 'none';
  modal.style.display = 'none';
});

const card = data.map((elem) => {
  const modalHtml = `
<div class="popup">
        <div class="modal">
          <div class="modal-div-1">
            <h2 class="modal-title">${elem.name}</h2>
            <ion-icon class="close-modal" name="close-outline"></ion-icon>
          </div>
          <div class="modal-div-2">
            <p class="canopy">${elem.canopy}</p>
            <p class="back-end">
              <img class="counter" src="images/Counter.png" alt="counter" />
              Back End Dev
            </p>
            <p class="back-end">
              <img class="counter" src="images/Counter.png" alt="counter" />
              2015
            </p>
          </div>
          <div class="modal-div-3">
            <div class="modal-img">
              <img class="snapshoot1-mob" src="${elem.image1}" alt="snapshoot1" />
              <img class="snapshoot1-desk" src="${elem.image2}" alt="snapshoot1" />
            </div>
            <div class="modal-mobile-detail">
              <!-- <div> -->
                <p class="modal-description desk mob"></p>
              <div class="tech">
                <ul class="modal-tools mobil">
                  <li class="tool">${elem.html}</li>
                  <li class="tool">${elem.css}</li>
                  <li class="tool">${elem.javascript}</li>
                </ul>
                <ul class="modal-tools desk">
                  <li class="tool">github</li>
                  <li class="tool">ruby</li>
                  <li class="tool">Bootstrap</li>
                </ul>
                <button type="button" class="modal-btn">
                  See Live <img src="images/Icon-see-live.png" alt="live" />
                </button>
                <button type="button" class="modal-btn">
                  See Source
                  <img src="images/Icon-see-source.png" alt="Github" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
 `;
});

const modalPopUp = () => {};
