// task 1 - in faile index.html

// task 2

console.log("Pasechnyk");

// task 3

let firstname;
let surname;
firstname = "Bob";
surname = "Dilan";
alert(`${firstname} ${surname}`);
firstname = surname;
alert(`${firstname} ${surname}`);

// task 4

const newObject = {
  customer: "Linda Hotline",
  card: 316492532410,
  cash: false,
  age: undefined,
  bonus: null,
};
console.log(typeof newObject.customer);
console.log(typeof newObject.card);
console.log(typeof newObject.cash);
console.log(typeof newObject.age);
console.log(typeof newObject.bonus);

// task 5

let isAdult = confirm("Are you of legal age?");
console.log(isAdult);

// task 6

let Name;
let Surname;
let studyGroup;
let yearOfBirth;
Name = "Tetyana";
Surname = "Pasechnyk";
studyGroup = "Lv-736";
yearOfBirth = 1971;
let maritalStatus = false;
console.log(typeof Name);
console.log(typeof Surname);
console.log(typeof studyGroup);
console.log(typeof yearOfBirth);
console.log(typeof maritalStatus);
console.log(
  `${yearOfBirth}, ${maritalStatus}, ${Name}, ${Surname}, ${studyGroup}`
);
let scores = null;
let progress;
console.log(typeof scores);
console.log(typeof progress);

//  task 7

let login = prompt("Please enter your login:", " ");
let email = prompt("Please enter your email:", " ");
let password = prompt("Please enter your password:", " ");
alert(`Dear ${login}, your email is ${email}, your password is ${password}.`);

//  task 8

const secInHour = 60 ** 2;
const secInDay = secInHour * 24;
const secInMounth = secInDay * 30;
alert(
  `An hour contains ${secInHour} seconds, a day contains ${secInDay} seconds, a month contains ${secInMounth} seconds.`
);

