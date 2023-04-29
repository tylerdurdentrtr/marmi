const picRows = document.querySelectorAll(".pic-row");
const pics = document.querySelectorAll(".pic");

// console.log(picRows);

picRows.forEach((row) => {
  let imgs = [...row.querySelectorAll("img")];
  const yeniDizi = imgs.flat();
  console.log(yeniDizi);
});

// pics.forEach((pic) => {
//   pic.addEventListener("click", () => {
//     const imgs = [...pic.querySelectorAll("img")];
//     console.log(imgs);
//   });
// });

const dizi = [
  ["ali", "veli", "deli"],
  ["ahmet", "mehmet", "osman"],
];
