// Practical task

//  task 1
open(
  "https://www.freecodecamp.org/",
  "freecodecamp.org/",
  "width = 300, hieght = 300"
);
// в консолі
// setTimeout(() => {
//   resizeBy(500, 500);
// }, 2000);
// setTimeout(() => {
//   moveTo(200, 200);
// }, 2000);
// setTimeout(() => {
//   close();
// }, 2000);

//  task 2
function changeCSS() {
  document.getElementById("text").style.cssText =
    "color: orange; font-size: 20px; font-family: Comic Sans MS";
}

//  task 3
const changeColorBlue = () => (document.body.style.backgroundColor = "blue");
document.getElementById("blueBtn").onclick = changeColorBlue;
 //--
const changeColorRose = () => (document.body.style.backgroundColor = "hotPink");
document.getElementById("roseBtn").ondblclick = changeColorRose;
 //--
const changeColorBrown = () => (document.body.style.backgroundColor = "brown");
const changeColorWhite = () => (document.body.style.backgroundColor = "white");
brownBtn.addEventListener("mouseup", changeColorWhite);
 //--
yellowLink.addEventListener("mouseover", (e) => {
  group.style.backgroundColor = "yellow";
});
yellowLink.addEventListener("mouseout", (e) => {
  group.style.backgroundColor = "white";
});

//  task 5
const pressMes = () =>
  document
    .getElementById("livBtn")
    .insertAdjacentHTML("afterend", "<p>I was pressed!</p>");
yellowLink.addEventListener("mouseover", (e) => {
  group.style.backgroundColor = "yellow";
});
yellowLink.addEventListener("mouseout", (e) => {
  group.style.backgroundColor = "white";
});
document.getElementById("livBtn").addEventListener("mouseover", (e) => {
  document
    .getElementById("livBtn")
    .insertAdjacentHTML("afterend", "<p>Mouse on me!</p>");
});
document.getElementById("livBtn").addEventListener("mouseout", (e) => {
  document
    .getElementById("livBtn")
    .insertAdjacentHTML("afterend", "<p>Mouse is not on me!</p>");
});
