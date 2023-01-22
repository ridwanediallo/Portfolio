import data from './data.js';

const popUp = document.querySelector('.popup');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const projectsList = document.querySelector('.container');
const snapshoot1Desk = document.querySelector('.snapshoot1-desk');
const snapshootMob = document.querySelector('.snapshoot1-mob');
const modaltitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');


closeModal.addEventListener('click', () => {
  popUp.style.display = 'none';
  modal.style.display = 'none';
});

for (let i = 0; i < data.length; i += 1) {
  projectsList.innerHTML = `${projectsList.innerHTML}
   <div class="content">
            <div class="snapshoot">
              <img
                class="project-snapshoot-mob snapshoot1-mob"
                src="${data[i].image}"
                alt="snapshoot1"
              />
              <img
                class="project-snapshoot-des snapshoot1-desk"
                src="${data[i].image}"
                alt="snapshoot1"
              />
            </div>
            <div class="text-content">
              <h2 class="tonic">${data[i].title}</h2>
              <div class="profile">
                <p class="canopy">Canopy</p>
                <p class="back-end">
                  <img class="counter" src="images/Counter.png" alt="counter" />
                  ${data[i].end}
                </p>
                <p class="back-end">
                  <img class="counter" src="images/Counter.png" alt="counter" />
                  2015
                </p>
              </div>
              <p class="detail">
                ${data[i].description}
              </p>
              <ul class="tools">
                <li class="tool">${data[i].tech1}</li>
                <li class="tool">${data[i].tech2}</li>
                <li class="tool">${data[i].tech3}</li>
              </ul>
              <div class="see-projects-btns">
                    <button type="button" class="modal-btn">
                      <a
                        href=${data[i].liveLink}
                        >See Live</a
                      ><img src="images/Icon-see-live.png" alt="live" />
                    </button>
                    <button type="button" class="modal-btn">
                      <a href=${data[i].github}
                        >See Source</a
                      >
                      <img src="images/Icon-see-source.png" alt="Github" />
                    </button>
                  </div>
            </div>
          </div>`;
}

document.addEventListener('click', (click) => {
  if (click.target.id === 'open-me') {
    popUp.style.display = 'block';
    modal.style.display = 'block';
  }
});

for (let i = 0; i < data.length; i += 1) {
  document.querySelector(`.see-project-${i}`).addEventListener('click', () => {
    snapshoot1Desk.src = data[i].image;
    snapshootMob.src = data[i].image;
    modaltitle.innerHTML = data[i].title;
  });
}
