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
  String: "line",
  Number: 10,
  Boolean: true,
  Undefined: undefined,
  Null: null,
};
console.log(typeof newObject.String);
console.log(typeof newObject.Number);
console.log(typeof newObject.Boolean);
console.log(typeof newObject.Undefined);
console.log(typeof newObject.Null);

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
const secInDay = 60 ** 2 * 24; // = sedInHour * 24;
const secInMounth = 60 ** 2 * 24 * 30; // = secInDay * 30;
alert(
  `An hour contains ${secInHour} seconds, a day contains ${secInDay} seconds, a month contains ${secInMounth} seconds.`
);

// or
const sec_InHour = 60 ** 2;
alert(`An hour contains ${sec_InHour} seconds.`);
const sec_InDay = sec_InHour * 24;
alert(`A day contains ${sec_InDay} seconds.`);
const sec_InMounth = sec_InDay * 30;
alert(`A month contains ${sec_InMounth} seconds.`);
