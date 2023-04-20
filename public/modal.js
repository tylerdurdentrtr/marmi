const images = document.querySelectorAll(".pic");
var modal = document.querySelector(".modal");
var left = document.querySelector(".modal-left");
var right = document.querySelector(".modal-right");
var closeMod = document.querySelector(".close-modal");
var modalImg = document.querySelector(".modal-img");
var number = 0;
var src;
var arr;
let photoArr = [];
let photos = [
  "../../../images/marble photos/traverten/Gold Travertine/1.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/2.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/3.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/4.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/5.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/6.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/7.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/8.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/9.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/10.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/11.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/12.jpg",
  "../../../images/marble photos/traverten/Gold Travertine/13.jpg",
];
images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    let child = image.childNodes;
    modalImg.src = child[3].src;
    src = modalImg.src;
    console.log(src);
    arr = src.split("");
    number = arr[73] - 1;
  });
});

// closeMod.addEventListener("click", () => {
//   modal.style.display = "none";
// });

let createArr = (length, path) => {};

left.addEventListener("click", () => {
  number--;
  if (number <= 0) number = photos.length - 1;
  modalImg.setAttribute("src", photos[number]);
  console.log(number);
  // console.log(modalImg.getAttribute("src"));
});

right.addEventListener("click", () => {
  number++;
  if (number >= photos.length) number = 0;
  modalImg.setAttribute("src", photos[number]);
  console.log(number);
  // console.log(modalImg.getAttribute("src"));
});
