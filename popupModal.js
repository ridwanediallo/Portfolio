import data from './data.js';

const details = document.querySelector('.detail-section');
const popUp = document.querySelector('.popup');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

for (let i = 0; i < data.length; i += 1) {
  details.innerHTML = `${details.innerHTML}
   <div class="popup">
          <div class="modal">
            <div class="modal-div-1">
              <h2 class="modal-title"></h2>
              <ion-icon class="close-modal" name="close-outline"></ion-icon>
            </div>
            <div class="modal-div-2">
              <p class="canopy">${data[i].title}</p>
              <p class="back-end">
                <img class="counter" src="images/Counter.png" alt="counter" />
                ${data[i].end}
              </p>
              <p class="back-end">
                <img class="counter" src="images/Counter.png" alt="counter" />
                2015
              </p>
            </div>
            <div class="modal-div-3">
              <div class="modal-img">
                <img
                  class="snapshoot1-mob"
                  src="${data[i].image}"
                  alt="snapshoot1"
                />
                <img class="snapshoot1-desk" src="#" alt="snapshoot1" />
              </div>
              <div class="modal-mobile-detail">
                <!-- <div> -->
                <p class="modal-description desk mob">
                </p>
                <p class="modal-description">
                ${data[i].description}
                </p>
                <!-- </div> -->
                <div class="tech">
                  <ul class="modal-tools mobil">
                      <li class="tool">${data[i].tech1}</li>
                      <li class="tool">${data[i].tech2}</li>
                      <li class="tool">${data[i].tech3}</li>
                  </ul>
                  <ul class="modal-tools desk">
                    <li class="tool">github</li>
                    <li class="tool">git</li>
                    <li class="tool">Bootstrap</li>
                  </ul>
                  <button type="button" class="modal-btn">
                    <a
                      href=" https://ridwanediallo.github.io/To-do-List-App/dist/"
                      >See Live</a
                    ><img src="images/Icon-see-live.png" alt="live" />
                  </button>
                  <button type="button" class="modal-btn">
                    <a href="https://github.com/ridwanediallo/To-do-List-App"
                      >See Source</a
                    >
                    <img src="images/Icon-see-source.png" alt="Github" />
                  </button>
                </div>
              </div>
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

closeModal.addEventListener('click', () => {
  popUp.style.display = 'none';
  modal.style.display = 'none';
});
