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

// if (typeof Error === "RangeError") {
//   console.log(Error.message);
//   alert("Your age is less than 14 years.");
// } else if (typeof Error === "TypeError") {
//   console.log(Error.message);
//   alert("You have entered incorrect value!!");
//   try {
//     checkAge();
//   } catch (e) {
//     if (e instanceof EvalError) {
//       console.error(`${e.name}: ${e.message}`);
//     } else if (e instanceof RangeError) {
//       console.error(`${e.name}: ${e.message}`);
//     } else {
//       throw e;
//     }
//   }
//   if (Number.isNaN(age)) {
//     alert("You have entered incorrect value!!");
//     checkAge();
//   } else if (age < 14) {
//     alert("Your age is less than 14 years.");
//   } else if ((age = undefined)) {
//     alert("The field is empty! Please enter your age");
//   } else {
//     alert("You can see this move.");
//     return age;
//   }
// }
// try {
//   let access = checkAge();
//   console.log(access);
// } catch (error) {
//   if (error.name === "TypeError") console.log("Incorred value!!!");
//   console.log(error.message);
// }
// 3. Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням 'MonthException'.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році.
// Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн
// у вигляді об’єкта класу MonthException з повідомленням 'Incorrect month number'.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// > console.log(showMonthName(5));
// May
// > console.log(showMonthName(14));
// // MonthException Incorrect month number

// class MonthException {
//   constructor(message) {
//     this.name = message;
//     return this.name;
//   }
// // }
//  new
// function showMonthName(month) {
// let month = +prompt("Enter number of month:", "")
//   switch (month) {
//     case 1:
//       month = "January";
//       break;
//     case 2:
//       month = "February";
//       break;
//     case 3:
//       month = " March";
//       break;
//     case 4:
//       month = "April";
//       break;
//     case 5:
//       month = "May";
//       break;
//     case 6:
//       month = "June";
//       break;
//     case 7:
//       month = "July";
//       break;
//     case 8:
//       month = "August";
//       break;
//     case 9:
//       month = "September";
//       break;
//     case 10:
//       month = "October";
//       break;
//     case 11:
//       month = "Nuvember";
//       break;
//     case 12:
//       month = "Dacember";
//       break;
//     default:
//      throw new Error("ERROR");
//   } console.log
// }
// console.log(showMonthName(2));
//console.log(showMonthName(15));
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
