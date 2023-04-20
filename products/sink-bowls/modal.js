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
  "../../images/tas/sinks-bowls/1.jpg",
  "../../images/tas/sinks-bowls/2.jpg",
  "../../images/tas/sinks-bowls/3.jpg",
  "../../images/tas/sinks-bowls/4.jpg",
  "../../images/tas/sinks-bowls/5.jpg",
  "../../images/tas/sinks-bowls/6.jpg",
  "../../images/tas/sinks-bowls/7.jpg",
  "../../images/tas/sinks-bowls/8.jpg",
  "../../images/tas/sinks-bowls/9.jpg",
  "../../images/tas/sinks-bowls/10.jpg",
  "../../images/tas/sinks-bowls/11.jpg",
  "../../images/tas/sinks-bowls/12.jpg",
  "../../images/tas/sinks-bowls/13.jpg",
  "../../images/tas/sinks-bowls/14.jpg",
  "../../images/tas/sinks-bowls/15.jpg",
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
