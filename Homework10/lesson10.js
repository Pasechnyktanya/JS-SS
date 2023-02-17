// Practical task

//  task  1.--------------------------------------
let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr;
console.log(x);
console.log(y);
console.log(z);

//  task  2.--------------------------------------
let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};
let {
  names: [name1, name2, name3, name4],
  ages: [age1, age2, age3, age4],
} = data;
console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

//   task  3.-------------------------------------
function mul(...args) {
  const arr = [];
  for (val of args) {
    if (typeof val === "number") {
      arr.push(val);
    }
  }
  if (arr.length > 1) {
    return arr.reduce((acc, num) => acc * num);
  } else if (arr.length === 1) {
    return arr[0];
  }
  return 0;
}
console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));
console.log(mul(05, "str", -2, 3, 25, null, "cngs"));
console.log(mul(false, 652, 1, "str", 2, 3, ""));
console.log(mul(2));
console.log(mul());

//   task  4.--------------------------------------
let server = {
  data: 0,
  convertToString: function (callback) {
    let dat = this;
    callback(() => dat.data + "");
  },
};
let client = {
  server: server,
  result: "",
  calc: function (data) {
    this.server.data = data;
    this.server.convertToString(this.notification());
  },
  notification: function () {
    let res = this;
    return (callback) => (res.result = callback());
  },
};

client.calc(123);
console.log(client.result);
console.log(typeof client.result);
client.calc(true);
console.log(client.result);
console.log(typeof client.result);

//   task  5.---------------------------------------
function mapBuilder(array1, array2) {
  const newmap = new Map();
  for (let i = 0; i < array1.length; i++) {
    newmap.set(array1[i], array2[i]);
  }
  return newmap;
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", "i"];
let map = mapBuilder(keys, values);
console.log(map.size);
console.log(map.get(2));
console.log(map.get(4));
console.log(typeof map);
console.log(map);
