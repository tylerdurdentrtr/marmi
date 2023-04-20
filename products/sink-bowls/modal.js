const images = document.querySelectorAll(".pic");
var modal = document.querySelector(".modal");
var left = document.querySelector(".modal-left");
var right = document.querySelector(".modal-right");
var closeMod = document.querySelector(".close-modal");
var modalImg = document.querySelector(".modal-img");
var number = 0;
// let eleman = 50;
var src;
var arr;
let photoArr = [];
let photos = [
  "../../images/marble-photos/granite/1.jpg",
  "../../images/marble-photos/granite/2.jpg",
  "../../images/marble-photos/granite/3.jpg",
  "../../images/marble-photos/granite/4.jpg",
  "../../images/marble-photos/granite/5.jpg",
  "../../images/marble-photos/granite/6.jpg",
  "../../images/marble-photos/granite/7.jpg",
  "../../images/marble-photos/granite/8.jpg",
  "../../images/marble-photos/granite/9.jpg",
  "../../images/marble-photos/granite/10.jpg",
  "../../images/marble-photos/granite/11.jpg",
  "../../images/marble-photos/granite/12.jpg",
  "../../images/marble-photos/granite/13.jpg",
];
images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";
    let child = image.childNodes;
    let child2 = child[1].childNodes[1].childNodes[3];
    // console.log(child2.getAttribute("src"));
    src = child2.getAttribute("src");
    arr = src.split("/");
    let arr2 = arr[5].split(".");
    console.log(arr2[0]);
    let src2 = arr2[0];
    modalImg.setAttribute("src", src);
    number = src2;
    number--;
    console.log(number);
  });
});

// closeMod.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// modal.addEventListener("click", () => {
//   modal.style.display = "none";
// });
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
// let createArr = (length, path) => {};

left.addEventListener("click", () => {
  number--;
  if (number < 0) number = photos.length - 1;
  modalImg.setAttribute("src", photos[number]);
  console.log(number);
  // console.log(modalImg.getAttribute("src"));
});

right.addEventListener("click", () => {
  number++;
  if (number >= photos.length) number = 0;
  modalImg.setAttribute("src", photos[number]);
  // console.log(number);
  console.log(modalImg.getAttribute("src"));
});
