const popUp = document.querySelector('.popup');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const projectsList = document.querySelector('.container');
const snapshoot1Desk = document.querySelector('.snapshoot1-desk');
const modaltitle = document.querySelector('.modal-title');

const data = [
  {
    id: 'project-1',
    title: 'Tonic',
    canopy: 'Canopy',
    html: 'html',
    css: 'css',
    javascript: 'javasctipt',
    image: 'images/desktop/Snapshoot-Portfolio.png',
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
    title: 'Multi-Post Stories',
    canopy: 'Canopy',
    image: 'images/Snapshoot4.png',
    html: 'html',
    css: 'css',
    javascript: 'javasctipt',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, fugiat maiores quam amet hic dolorum unde eaque explicabo sapiente asperiores voluptatibus vel. Neque deserunt sunt vel ducimus voluptatem tenetur quam incidunt esse sequi enim labore beatae iure minus dolorem nam commodi libero atque, voluptatum alias accusantium, molestiae maiores voluptatibus error. Cupiditate, enim nobis. Expedita deserunt et eaque quisquam nostrum ducimus quasi, accusantium facilis, quibusdam quia, accusamus excepturi voluptate minus consectetur dolore adipisci delectus! Facere officiis corrupti autem sequi quod atque?',
  },
];

closeModal.addEventListener('click', () => {
  popUp.style.display = 'none';
  modal.style.display = 'none';
});

for (let i = 0; i < data.length; i += 1) {
  projectsList.innerHTML = `${projectsList.innerHTML}
   <div class="content">
            <div class="snapshoot">
              <img
                class="snapshoot1-mob"
                src="${data[i].image}"
                alt="snapshoot1"
              />
              <img
                class="snapshoot1-desk"
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
                  Back End Dev
                </p>
                <p class="back-end">
                  <img class="counter" src="images/Counter.png" alt="counter" />
                  2015
                </p>
              </div>
              <p class="detail">
                A daily selection of privately personalized reads; no accounts
                or sign-ups required.
              </p>
              <ul class="tools">
                <li class="tool">html</li>
                <li class="tool">css</li>
                <li class="tool">javaScript</li>
              </ul>
              <button type="button" id="open-me" class='see-project see-project-${i}'>See Project</button>
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
    modaltitle.innerHTML = data[i].title;
  });
}
