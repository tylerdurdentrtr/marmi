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
var path;
let photoArr = [];
let gallery = [
  "../../images/marble-photos/onyx/gallery/1.jpg",
  "../../images/marble-photos/onyx/gallery/2.jpg",
  "../../images/marble-photos/onyx/gallery/3.jpg",
  "../../images/marble-photos/onyx/gallery/4.jpg",
  "../../images/marble-photos/onyx/gallery/5.jpg",
  "../../images/marble-photos/onyx/gallery/6.jpg",
  "../../images/marble-photos/onyx/gallery/7.jpg",
  "../../images/marble-photos/onyx/gallery/8.jpg",
];
let projects = [
  "../../images/marble-photos/onyx/projects/1.jpg",
  "../../images/marble-photos/onyx/projects/2.jpg",
  "../../images/marble-photos/onyx/projects/3.jpg",
  "../../images/marble-photos/onyx/projects/4.jpg",
];
images.forEach((image) => {
  image.addEventListener("click", () => {
    // modal.style.display = "flex";
    // let child = image.childNodes;
    // let child2 = child[1].childNodes[1].childNodes[3];
    // // console.log(child2.getAttribute("src"));
    // src = child2.getAttribute("src");
    // arr = src.split("/");
    // console.log(arr);
    // let arr2 = arr[5].split(".");
    // console.log(arr2[0]);
    // let src2 = arr2[0];
    // modalImg.setAttribute("src", src);
    // number = src2;
    // number--;
    // console.log(number);
    modal.style.display = "flex";
    let child = image.childNodes;
    let child2 = child[1].childNodes[1].childNodes[3];
    src = child2.getAttribute("src");
    modalImg.setAttribute("src", src);
    arr = src.split("/");
    console.log(arr);
    path = arr[5];
    arr = arr[6].split(".");
    console.log(path);
    number = arr[0];
    number--;
    console.log(number);
  });
});

// closeMod.addEventListener("click", () => {
//   modal.style.display = "none";
// });
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
// let createArr = (length, path) => {};

// left.addEventListener("click", () => {
//   number--;
//   if (number <= 0) number = photos.length - 1;
//   modalImg.setAttribute("src", photos[number]);
//   console.log(number);
//   // console.log(modalImg.getAttribute("src"));
// });

// right.addEventListener("click", () => {
//   number++;
//   if (number >= photos.length) number = 0;
//   modalImg.setAttribute("src", photos[number]);
//   // console.log(number);
//   console.log(modalImg.getAttribute("src"));
// });

left.addEventListener("click", () => {
  number--;
  if (number < 0) {
    if (path === "gallery") number = gallery.length - 1;
    else if (path === "projects") number = projects.length - 1;
  }
  if (path === "gallery") modalImg.setAttribute("src", gallery[number]);
  else if (path === "projects") modalImg.setAttribute("src", projects[number]);

  console.log(number);
  // console.log(modalImg.getAttribute("src"));
});

right.addEventListener("click", () => {
  number++;
  if (
    (path === "gallery" && number >= gallery.length) ||
    (path === "projects" && number >= projects.length)
  )
    number = 0;
  if (path === "gallery") modalImg.setAttribute("src", gallery[number]);
  else if (path === "projects") modalImg.setAttribute("src", projects[number]);
  // console.log(number);
  console.log(modalImg.getAttribute("src"));
});
