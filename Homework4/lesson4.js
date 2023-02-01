//    task   1

function calcRectangleArea() {
  let width = +prompt("Enter width:", "");
  let height = +prompt("Enter height:", "");
  if (
    !Number.isNaN(width) &&
    !Number.isNaN(height) &&
    width > 0 &&
    height > 0
  ) {
    return width * height;
  } else {
    throw new TypeError(" You have entered incorrect number!!!");
  }
}
try {
  let area = calcRectangleArea();
  console.log(area);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}

//   task   2

function checkAge() {
  try {
    let age = +prompt("Enter your age:", "");
    if (Number.isNaN(age)) {
      throw new Error("Incorrectly entered data");
    } else if (age == "") {
      throw new Error("The field is empty! Piease enter your age");
    } else if (age < 14) {
      throw new Error(
        "Your age is less than 14 years. You can not watch this move!!!"
      );
    } else {
      alert("You can watch this movie, enjoy watching the movie.");
    }
  } catch (error) {
    alert(`${error.name}: ${error.message}`);
  }
}
checkAge();

//   task  3

class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
  func() {
    console.log(`${this.name} ${this.message}`);
  }
}
const showMessage = new MonthException("Incorrect month number");

function showMonthName() {
  let month = +prompt("Enter number of month:", "");
  const arrMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nuvember",
    "Dacember",
  ];
  return month > 0 && month <= 12 ? arrMonths[month - 1] : showMessage.func();
}

console.log(showMonthName());

//  task  4

function showUser(id) {
  if (id < 0) {
    throw new Error(`Incorrectly entered ID: ${id}`);
  } else {
    return { id: id };
  }
}

function showUsers(ids) {
  const correctId = [];
  let id;
  for (let count = 0; count < ids.length; count++) {
    id = ids[count];
    try {
      showUser(id);
      correctId.push(id);
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }
  return correctId;
}
console.log(showUsers([7, -12, 44, -15, 14, -3, 22]));
