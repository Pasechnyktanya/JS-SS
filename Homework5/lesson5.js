// Practical task

//    task  1

function propsCount(currentObject) {
  return Object.keys(currentObject).length;
}
const mentor = {
  course: "JS fundamental",
  duration: 3,
  direction: "web-development",
};

console.log(propsCount(mentor));

//    task  2

const objFive = {
  firstField: "first",
  secondField: 2,
  thirdField: true,
  foursField: undefined,
  fifthField: null,
};
function showProps(obj) {
  const arr1 = [];
  const arr2 = [];
  for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
  }
  console.log(arr1);
  console.log(arr2);
}
showProps(objFive);

//    task   3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  showFullName() {
    return `${this.name} ${this.surname}`;
  }
}
class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  showFullName(midleName) {
    this.midleName = midleName;
    return `${this.surname} ${this.name} ${this.midleName}`;
  }
  showCourse() {
    let dateYear = new Date();
    let currentYear = dateYear.getFullYear();
    return `${currentYear - this.year}`;
  }
}
const stud1 = new Student("Petro", "Petrenko", 2018);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());

//    task  4
// 	5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче.
// Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value
// 	6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.

class Worker {
  #experience = 1.2;
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
  }
  get showExp() {
    return this.#experience;
  }
  set showExp(value) {
    this.#experience = value;
  }
  showSalary() {
    return `${this.dayRate * this.workingDays}`;
  }
  showSalaryWithExperience() {
    return this.showSalary() * this.showExp;
  }
}

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(`${worker1.fullName} salary ${worker1.showSalary()}`);
console.log("New experience: " + worker1.showExp);
console.log("New salary (1.2): " + worker1.showSalaryWithExperience());
worker1.showExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log("New salary(1.5): " + worker1.showSalaryWithExperience());

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(`${worker2.fullName} salary ${worker2.showSalary()}`);
console.log("New experience: " + worker2.showExp);
console.log("New salary (1.2): " + worker2.showSalaryWithExperience());
worker2.showExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log("New salary(1.5): " + worker2.showSalaryWithExperience());

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(`${worker3.fullName} salary ${worker3.showSalary()}`);
console.log("New experience: " + worker3.showExp);
console.log("New salary (1.2): " + worker3.showSalaryWithExperience());
worker3.showExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log("New salary(1.5): " + worker3.showSalaryWithExperience());

const arrWorker = [worker1, worker2, worker3];
console.log(arrWorker);
//  доробити const sortedSalary = arrWorker.sort(
//     (w1, w2) => (w1.showSalaryWithExperience() < w2.showSalaryWithExperience())
//     ? 1 : (w1.showSalaryWithExperience() > w2.showSalaryWithExperience()) ? -1 : 0);

// console.log(sortedSalary);
// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584

//    task   5

class GeometricFigure {
  getArea() {
    return 0;
  }
  toString() {
    return 0;
  }
}
//
class Triangle extends GeometricFigure {
  constructor(side1, side2, side3) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  getArea() {
    super.getArea();
    return this.calcArea();
  }
  calcArea() {
    let p = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(
      p * (p - this.side1) * (p - this.side2) * (p - this.side3)
    );
  }
  toString() {
    super.toString();
    return this.constructor.name;
  }
}
//
class Square extends GeometricFigure {
  constructor(side) {
    super();
    this.side = side;
  }
  getArea() {
    super.getArea();
    return this.calcArea();
  }
  calcArea(value) {
    if (value > 0) {
      this.side = value;
    }
    return this.side ** 2;
  }
  toString() {
    super.toString();
    return this.constructor.name;
  }
}
//
class Circle extends GeometricFigure {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  getArea() {
    super.getArea();
    return this.calcArea();
  }
  calcArea(value) {
    if (value > 0) {
      this.radius = value;
    }
    return Math.PI * this.radius ** 2;
  }
  toString() {
    super.toString();
    return this.constructor.name;
  }
}
function handleFigures(arr) {
  for (let obj of arr) {
    if (obj instanceof Triangle) {
      console.log(
        `Geometric figure: ${obj.toString()} - area: ${obj.getArea()}`
      );
    } else if (obj instanceof Square) {
      console.log(
        `Geometric figure: ${obj.toString()} - area: ${obj.getArea()}`
      );
    } else if (obj instanceof Circle) {
      console.log(
        `Geometric figure: ${obj.toString()} - area: ${obj.getArea()}`
      );
    }
  }
  return arr.reduce((i, obj) => i + obj.getArea(), 0);
}
const figures = [new Triangle(4, 5, 6), new Square(7), new Circle(5)];
console.log("Total area: " + handleFigures(figures));
