const images = document.querySelectorAll(".pic");

images.forEach((image) => {
  image.addEventListener("click", () => {
    console.log(image.parentElement.nodeName);
  });
});
