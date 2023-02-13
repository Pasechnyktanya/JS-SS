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
// }, 4000);
// setTimeout(() => {
//   close();
// }, 6000);

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
  document.body.style.backgroundColor = "yellow";
});
yellowLink.addEventListener("mouseout", (e) => {
  document.body.style.backgroundColor = "white";
});

//  task 4
delBtn.addEventListener("click", (e) => {
  let opt = document.querySelector("#groupDel");
  opt.remove(opt.selectedIndex);
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

//  task 6
window.addEventListener("resize", (e) => {
  document.getElementById(
    "value"
  ).innerHTML = `Height: ${window.innerHeight}, width: ${window.innerWidth}`;
});

//  task 7
const arrCities = {
  ger: ["Berlin", "Drezden", "Munich", "Bern"],
  usa: ["Washington", "Vancouver", "New-York", "Michigan"],
  ukr: ["Kyiv", "Rivne", "lviv", "Dnipro"],
};
let selectPrime = document.getElementById("country");
selectPrime.addEventListener("change", createList);
selectPrime.addEventListener("change", toParagraph);

let citySelect = document.getElementById("cities");
citySelect.addEventListener("change", toParagraph);

function createList() {
  citySelect.innerHTML = "";
  let selectCountry = selectPrime.value;
  for (let i = 0; i < arrCities[selectCountry].length; i++) {
    let newOption = document.createElement("option");
    newOption.innerHTML = arrCities[selectCountry][i];
    citySelect.appendChild(newOption);
  }
}
let parg = document.getElementById("prg");

function toParagraph() {
  parg.innerHTML = "";
  parg.innerHTML = `${selectPrime.options[selectPrime.selectedIndex].text} ${
    citySelect.options[citySelect.selectedIndex].text
  }`;
}
