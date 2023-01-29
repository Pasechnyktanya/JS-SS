//  task 1

const array = [2, 3, 4, 5];
// -- for
let resultFirst = 1;
for (let i = 0; i < array.length; i++) {
  resultFirst *= array[i];
}
console.log(resultFirst);

//  -- while
let count = 0;
let resultSecond = 1;
while (count < array.length) {
  resultSecond *= array[count];
  count++;
}
console.log(resultSecond);

//  task 2

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    alert(`${i} is even`);
  } else {
    alert(`${i} is odd`);
  }
}

//  task 3

function randArray(counter) {
  const arrayRandom = [];
  for (let i = 0; i < counter; i++) {
    arrayRandom.push(Math.floor(Math.random() * 500));
  }
  console.log(arrayRandom);
}
randArray(5);
randArray(12);

//  task  4

function raiseToDegree() {
  let a = +prompt("Enter the number:", "");
  let b = +prompt("Enter the degree of this number;", "");
  return Number.isInteger(a) && Number.isInteger(b)
    ? console.log("Result " + Math.pow(a, b))
    : console.log("You have entered not integer number!");
}
raiseToDegree();

//  task 5

function findMin(...arguments) {
  arguments.sort((a, b) => a - b);
  return arguments[0];
}
console.log(findMin(10, -8, 10, -36, -1, 20));
console.log(findMin(12, 14, 4, -4, 0.2));

// task 6

function findUnique(arr) {
  let set = new Set(arr);
  return arr.length === set.size;
}
console.log(findUnique([2, 6, 55, 45, 2, 48]));
console.log(findUnique([33, 25, 36, 55, 85, 46]));

// task  7

function lastElem(arr, value) {
  return !value
    ? arr[arr.length - 1]
    : value >= arr.length
    ? arr
    : arr.splice(-value, arr.length - 1);
}
console.log(lastElem([3, 4, 10, -5])); // -5
console.log(lastElem([3, 4, 10, -5], 2)); // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8)); // [3, 4, 10, -5]

// task 8

function getUpperFirst(str) {
  return str
    .split(" ")
    .map((i) => i[0].toUpperCase() + i.slice(1).toLowerCase()) //
    .join(" ");
}
console.log(getUpperFirst("i love java script"));
console.log(getUpperFirst("i GO tO PArk"));
