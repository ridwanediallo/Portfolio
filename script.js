const menubtn = document.querySelector('.open');
const closebtn = document.querySelector('.close');
const logo = document.querySelector('.logo');
const mobilemenu = document.querySelector('.menu-links');
const contactLink = document.querySelectorAll('.ctc-link a');

const arrowDown = document.querySelector('arrow-down');
const tech = document.querySelector('tech');

arrowDown.addEventListener('click', (e) => {
    if (tech.style.display === 'none') {
      tech.style.display = 'block';
    } else {
      tech.style.display = 'none';
    }
});

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

const contactForm = document.getElementById('form');

function validationForm() {
  const errorMsg = document.getElementById('error-msg');
  const userEmail = document.getElementById('mail');

  if (userEmail.value === userEmail.value.toLowerCase()) {
    return true;
  }
  errorMsg.innerHTML = `Your email should be in lowercase. Consider using ${userEmail.value.toLowerCase()} instead`;
  return false;
}

contactForm.addEventListener('submit', (e) => {
  if (!validationForm()) {
    e.preventDefault();
  }
});

const myForm = document.querySelector('form');
let dataObjct = {
  fullName: '',
  mail: '',
  message: '',
};

if (localStorage.getItem('dataObjct') != null) {
  dataObjct = JSON.parse(localStorage.getItem('dataObjct'));
  myForm.fullName.value = dataObjct.fullName;
  myForm.mail.value = dataObjct.mail;
  myForm.message.value = dataObjct.message;
}
myForm.addEventListener('change', () => {
  dataObjct.fullName = myForm.fullName.value;
  dataObjct.mail = myForm.mail.value;
  dataObjct.message = myForm.message.value;
  localStorage.setItem('dataObjct', JSON.stringify(dataObjct));
});
