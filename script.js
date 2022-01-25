const menubtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const logo = document.querySelector('.logo');
const mobilemenu = document.querySelector('.menu-links');
const contactLink = document.querySelectorAll('.ctc-link a');

mobilemenu.style.display = 'none';

menubtn.addEventListener('click', () => {
  if (mobilemenu.style.display === 'none') {
    mobilemenu.style.display = 'block';
    logo.style.display = 'none';
    menubtn.style.display = 'none';
  } else {
    mobilemenu.style.display = 'none';
    logo.style.display = 'block';
    menubtn.style.display = 'block';
  }
});

closebtn.addEventListener('click', () => {
  if (mobilemenu.style.display === 'block') {
    mobilemenu.style.display = 'none';
    logo.style.display = 'block';
    menubtn.style.display = 'block';
  }
});

contactLink.forEach((element) => {
  element.addEventListener('click', () => {
    mobilemenu.style.display = 'none';
    logo.style.display = 'block';
    menubtn.style.display = 'block';
  });
});
