//---------------------------------  task 1
//--1--
document.querySelector("div").innerHTML = "Last1";
//--2--
document.getElementById("tests").innerHTML = "Last2";

//---------------------------------  task 2
let cat = document.getElementsByClassName("image")[0];
cat.src = "cat.jpg";
alert(cat.outerHTML);

//---------------------------------  task 3
let arrPrg = document.getElementById("text2").querySelectorAll("p");
for (let i = 0; i < arrPrg.length; i++) {
  alert(`Selector text ${i}: ${arrPrg[i].innerHTML}`);
}

//---------------------------------  task  4
// --1--
let listnum = document.getElementById("list").children;
alert(listnum[0].innerHTML);
alert(listnum[4].innerHTML);
alert(listnum[1].innerHTML);
alert(listnum[3].innerHTML);
alert(listnum[2].innerHTML);
//--2--
alert(document.getElementById("list2").firstElementChild.innerHTML);
alert(document.getElementById("list2").lastElementChild.innerHTML);
alert(
  document.getElementById("list2").firstElementChild.nextElementSibling
    .innerHTML
);
alert(
  document.getElementById("list2").lastElementChild.previousElementSibling
    .innerHTML
);
alert(document.getElementById("list2").children[2].innerHTML);

//--------------------------------   task  5
document.querySelector("h1").style.background = "hsl(144, 73%, 58%)";
let mDiv = document.getElementById("myDiv").querySelectorAll("p");
mDiv[0].style.fontWeight = "700";
mDiv[1].style.color = "red";
mDiv[2].style.textDecoration = "underline";
mDiv[3].style.fontStyle = "italic";
document.getElementById("myList").style.listStyle = "none";
document.getElementById("myList").style.display = "flex";
document.getElementById("myList").nextElementSibling.style.display = "none";

//---------------------------------   task  6
let mes1 = prompt("My first message: ", "");
let mes2 = prompt("My second message: ", "");
document.getElementById("input1").value = mes1;
document.getElementById("input2").value = mes2;
let chang1 = mes2;
let chang2 = mes1;
document.getElementById("input1").value = chang1;
document.getElementById("input2").value = chang2;

//---------------------------------   task  7
document.body.lastElementChild.insertAdjacentHTML(
  "afterend",
  `<main class = "mainClass check item" >
       <div id="myDiv2">
         <p>First paragraph</p>
       </div>
     </main>`
);
