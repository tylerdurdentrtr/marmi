const images = document.querySelectorAll(".pic");
var modal = document.querySelector(".modal");
var left = document.querySelector(".modal-left");
var right = document.querySelector(".modal-right");
var closeMod = document.querySelector(".close-modal");
var modalImg = document.querySelector(".modal-img");
var number = 0;
var src;
var arr;
let path;
let gallery = [
  "../../../images/marble-photos/travertine/gold-travertine/gallery/1.jpg",
  "../../../images/marble-photos/travertine/gold-travertine/gallery/2.jpg",
  "../../../images/marble-photos/travertine/gold-travertine/gallery/3.jpg",
  "../../../images/marble-photos/travertine/gold-travertine/gallery/4.jpg",
  "../../../images/marble-photos/travertine/gold-travertine/gallery/5.jpg",
  "../../../images/marble-photos/travertine/gold-travertine/gallery/6.jpg",
  "../../../images/marble-photos/travertine/gold-travertine/gallery/7.jpg",
  "../../../images/marble-photos/travertine/gold-travertine/gallery/8.jpg",
];

images.forEach((image) => {
  image.addEventListener("click", () => {
    modal.style.display = "flex";

    let child = image.childNodes;
    let child2 = child[1].childNodes[1].childNodes[3];
    // console.log(child2);

    src = child2.getAttribute("src");
    modalImg.setAttribute("src", src);

    // let next =
    //   image.nextSibling.nextSibling.childNodes[1].childNodes[1].childNodes[3];

    // let previous =
    //   image.previousSibling.previousSibling.childNodes[1].childNodes[1]
    //     .childNodes[3];

    // console.log(previous);
    // console.log(next);

    // arr = src.split("/");
    // path = arr[7];
    // arr = arr[8].split(".");
    // console.log(path);
    // number = arr[0];
    // number--;
    // console.log(number);
  });
});

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

left.addEventListener("click", () => {
  number--;
  if (number < 0) {
    if (path === "gallery") number = gallery.length - 1;
    else if (path === "pattern") number = pattern.length - 1;
    else if (path === "projects") number = projects.length - 1;
  }
  if (path === "gallery") modalImg.setAttribute("src", gallery[number]);
  else if (path === "pattern") modalImg.setAttribute("src", pattern[number]);
  else if (path === "projects") modalImg.setAttribute("src", projects[number]);
  console.log(number);
});

right.addEventListener("click", () => {
  number++;
  if (
    (path === "gallery" && number >= gallery.length) ||
    (path === "pattern" && number >= pattern.length) ||
    (path === "projects" && number >= projects.length)
  )
    number = 0;
  if (path === "gallery") modalImg.setAttribute("src", gallery[number]);
  else if (path === "pattern") modalImg.setAttribute("src", pattern[number]);
  else if (path === "projects") modalImg.setAttribute("src", projects[number]);
  console.log(modalImg.getAttribute("src"));
});
