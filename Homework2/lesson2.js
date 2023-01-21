// task 1

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);

let res2 = String(Boolean(x < y)) + String(y);
console.log(res2);
console.log(typeof res2);

let res3 = x < y;
console.log(res3);
console.log(typeof res3);

let res4 = typeof x / y;
console.log(res4);
console.log(typeof res4);

// task 2

let n = +prompt("Enter your number: ");
if (n >= 0 && n % 2 === 0) {
  console.log("Your number is even positive number.");
} else {
  console.log("Your number is not an even positive number.");
}
if (n % 7 === 0) {
  console.log("Your number is a multiple of 7.");
} else {
  console.log("Your number is not a multiple of 7.");
}

// task 3

const array = [];
array[0] = 25;
array[1] = "second";
array[2] = true;
array[3] = null;
// console.log(array);
alert(`Array has ${array.length} elements.`);
array[4] = +prompt("Enter any value:", "0");
alert(`You have entered ${array[4]}.`);
array.shift();
alert(array);
// console.log(array);

// task 4

let cities = ["Rome", "Lviv", "Warsaw"];
let newCities = cities.join("*");
console.log(newCities);

// task 5

let isAdult = +prompt("Are you of legal age? Please, enter your age:", " ");
if (isAdult >= 18) {
  alert("You have reached the age of majority.");
} else {
  alert("You are still too young.");
}

// task 6

let a = +prompt("Enter the first side of the triangle:", "");
let b = +prompt("Enter the second side of the triangle:", "");
let c = +prompt("Enter the third side of the triangle:", "");
let p;
let area;
if (a < b + c && b < a + c && c < a + b) {
  p = (a + b + c) / 2;
  area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log(`The area of the triangle is ${area.toFixed(3)}`);
} else {
  console.log("Incorrect data!!!");
}
// - right triangle?
console.log(
  a ** 2 === b ** 2 + c ** 2 ||
    b ** 2 === c ** 2 + a ** 2 ||
    c ** 2 === a ** 2 + b ** 2
    ? "It is a right triangle."
    : "It is not a right triangle."
);

//  7 

let currentHour = new Date();
let hour = currentHour.getHours();

// 1 version
switch (true) {
  case hour < 5 && hour > 22:
    alert(" Good night!");
    break;
  case hour >= 5 && hour < 11:
    alert(" Good morning!");
    break;
  case hour >= 11 && hour < 17:
    alert(" Good day!");
    break;
  case hour >= 17 && hour < 23:
    alert(" Good evening");
    break;
  default:
    alert(" Error!");
}
// 2 version
alert(
  hour < 5 && hour > 22
    ? " Good night!"
    : hour >= 5 && hour < 11
    ? " Good morning!"
    : hour >= 11 && hour < 17
    ? " Good day!"
    : hour >= 17 && hour < 23
    ? " Good evening"
    : " Error!"
);
