var lastNav = document.querySelector(".last-nav");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
var header = document.querySelector(".home-navbar");
var images = ["./images/1.jpg", "./images/2.jpg", "./images/3.jpg"];
var number = 0;

setInterval(() => {
  number++;
  if (number >= images.length) number = 0;
  header.style.backgroundImage = `url("${images[number]}")`;
}, 3500);

console.log(number);

left.addEventListener("click", () => {
  number--;
  if (number <= -1) number = 2;
  header.style.backgroundImage = `url("${images[number]}")`;

  console.log(number);
});

right.addEventListener("click", () => {
  number++;
  if (number >= images.length) number = 0;
  header.style.backgroundImage = `url("${images[number]}")`;

  console.log(number);
});
