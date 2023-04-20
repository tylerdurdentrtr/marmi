var lastNav = document.querySelector(".last-nav");
var closeHM = document.querySelector(".close-hm");
var openHM = document.querySelector(".menu-icon");
var lastOpenHM = document.querySelector(".open");
var hMenu = document.querySelector(".hamburger-menu");
var body = document.body;
var modal = document.querySelector(".modal");
var closeMod = document.querySelector(".close-modal");

var modalImg = document.querySelector(".modal-img");

var picLay = document.querySelectorAll(".pic-lay");

var imageSrc;

function openHamburgerMenu() {
  hMenu.style.display = "flex";
  body.style.overflowY = "hidden";
}
function closeHamburgerMenu() {
  hMenu.style.display = "none";
  body.style.overflowY = "scroll";
}

function showLastNav() {
  if (window.scrollY > 475) {
    lastNav.style.display = "flex";
  } else {
    lastNav.style.display = "none";
  }
}

// const openModal = (elo) => {
//   modal.style.display = "flex";
//   body.style.overflowY = "hidden";
//   imageSrc = elo.target.nextElementSibling.src;
//   console.log(imageSrc);
//   modalImg.src = imageSrc;
// };

// picLay.forEach((pic) => {
//   pic.addEventListener("click", () => {
//     modal.style.display = "flex";
//     body.style.overflowY = "hidden";
//     let child = pic.childNodes;
//     console.log(child[3].src);
//     // modalImg.src = child[3].src;
//   });
// });

// const closeModal = () => {
//   modal.style.display = "none";
//   body.style.overflowY = "scroll";
// };
window.addEventListener("scroll", showLastNav);

closeHM.addEventListener("click", closeHamburgerMenu);
lastOpenHM.addEventListener("click", openHamburgerMenu);
// picLay.forEach((el) => el.addEventListener("click", openModal.bind(el)));

openHM.addEventListener("click", openHamburgerMenu);
// closeMod.addEventListener("click", closeModal);
