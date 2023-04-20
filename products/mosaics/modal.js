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
  "../../images/tas/mosaics/1.jpg",
  "../../images/tas/mosaics/2.jpg",
  "../../images/tas/mosaics/3.jpg",
  "../../images/tas/mosaics/4.jpg",
  "../../images/tas/mosaics/5.jpg",
  "../../images/tas/mosaics/6.jpg",
  "../../images/tas/mosaics/7.jpg",
  "../../images/tas/mosaics/8.jpg",
  "../../images/tas/mosaics/9.jpg",
  "../../images/tas/mosaics/10.jpg",
  "../../images/tas/mosaics/11.jpg",
  "../../images/tas/mosaics/12.jpg",
  "../../images/tas/mosaics/13.jpg",
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

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

left.addEventListener("click", () => {
  number--;
  if (number < 0) number = photos.length - 1;
  modalImg.setAttribute("src", photos[number]);
  console.log(number);
});

right.addEventListener("click", () => {
  number++;
  if (number >= photos.length) number = 0;
  modalImg.setAttribute("src", photos[number]);
  console.log(modalImg.getAttribute("src"));
});
