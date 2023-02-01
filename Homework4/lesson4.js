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
}

//   task   2

function checkAge() {
  let age = +prompt("Enter your age:", "");
  if (!Number.isNaN(age) && age >= 14) {
    alert("You can watch this move.");
  } else if (age === 0) {
    alert("You havent entered your age! Retry again");
    checkAge();
  } else if (age < 14) {
    alert("Your age is less than 14 years. You can not watch this move!!!");
    throw new RangeError("Age is less than 14 years");
  } else {
    throw new TypeError("Incorrectly entered data");
  }
}
try {
  checkAge();
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}


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
  switch (month) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return " March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "Nuvember";
    case 12:
      return "Dacember";
    default:
      return showMessage.func();
  }
}

console.log(showMonthName());

// 4. Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт,
// який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// 	Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, перевіряє
// з використанням функції showUser() кожен елемент масиву ids на коректність, в разі виключної ситуації виводить
//  повідомлення про помилку. Функція showUsers(ids) повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// 	Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]
// function showUser(id) {
//   const obj = new Object();
//   let obj.id = +prompt("Enter ID:", "");
//   if(id > 0) {
//     return id;
//   }
//
