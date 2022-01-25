"use strict";
const menubtn = document.getElementById("menu");
const mobilemenu = document.querySelector(".menu-links");
const menu = document.querySelector(".menu-icon");
const contactLink = document.querySelectorAll(".ctc-link a");

mobilemenu.style.display = "none";

menubtn.onclick = function () {
  if (mobilemenu.style.display === "none") {
    mobilemenu.style.display = "block";
    menu.src = "images/close.png";
  } else {
    mobilemenu.style.display = "none";
    menu.src = "images/Union.svg";
  }
};

contactLink.forEach((element) => {
  element.addEventListener("click", function () {
    mobilemenu.style.display = "none";
    menu.src = "images/Union.png";
  });
});
