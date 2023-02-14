// task  1
function upperCase(str) {
  let regexp = /^[A-Z]/;
  if (regexp.test(str)) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}
upperCase("regexp");
upperCase("RegExp");

// task  2
function checkEmail(str) {
  let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(regexp.test(str));
}
checkEmail("Qmail2@gmail.com");
checkEmail("knvahiru+rtca-cat.rtca@vmhvmah.ua");

// task  3. Напишіть регулярний вираз, який знаходитиме в тексті одну літеру d, за якою йде одна чи більше b, за якими одна d.
// Запам’ятати знайдені b і наступну за ними d.  Враховувати верхній і нижній регістр.
// 	Приклад роботи:
// Для стрінги "cdbBdbsbz" результат ["dbBd", "bB", "d"]

const regexp = /d?b+d?/gi; // допрацювати( якщо вибирає dbBd. то лишається тільки 2 маленьких b, d немає)
console.log("cdbBdbsbz".match(regexp));

//  task  4
const regexp2 = /([A-Za-z]+)\s([A-Za-z]+)/;
let str = "Java Script";
let newstr = str.replace(regexp2, "$2, $1");
console.log(newstr);
str = "regular expression";
newstr = str.replace(regexp2, "$2, $1");
console.log(newstr);

// const regexp2 = /\s/g;
// let str = "Java Script";
// console.log(str.split(regexp2).reverse().join(", "));
// str = "regular expression that will be swapped"; - всі слова розвертає через кому
// console.log(str.split(regexp2).reverse().join(", "));

//   task  5
function validCard(card) {
  const reg = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return card.match(reg) ? true : false;
}
console.log(validCard("1256-6523-7895-1215"));
console.log(validCard("lx56-0523-7826595-1215"));
console.log(validCard("256o-6523-7895-11.5"));
console.log(validCard("2943-f256-3208-2320"));
console.log(validCard("5555-2566-6253-0022"));
console.log(validCard("lmcqmehqa ehahrgahg"));

//   task  6
function checkMail(mail) {
  const reg = /^[^_-]\w+([\.-_]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return mail.match(reg)
    ? console.log("Email is correct!")
    : console.log("Email is not correct!");
}
checkMail("my_mail@gmail.com");
checkMail("22.my_mail@g-mail.com");
checkMail("m.y-mai.hcrtnuyl13@gmail.com");
checkMail("Lo333my_mail@gmail.com");
checkMail("my_ma--il@gmail.com");
checkMail("msvctog-vhnsivuh.imewo-my_mail@gmail.com");

//   task  7
function checkLogin(str) {
  const reg = /^\p{L}((\w|\d+\.?\d*)){1,9}$/iu;
  console.log(reg.test(str));
  console.log(str.match(/\d+\.?\d*/g));
}
checkLogin("4e1.1ret3");
checkLogin("ee1*1ret3");
checkLogin("ekjhf 3rt3");
checkLogin("owmv2.5ck");
checkLogin("22fm5.866f");
checkLogin("jmvsgvhmw1ret3");
