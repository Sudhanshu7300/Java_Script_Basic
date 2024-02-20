// forEach(): Har item par ek function ko call karta hai, lekin koi naya array nahi banata hai.

const number = [1, 2, 4, 6, 7, 8, 2, 1];

function printNumber(value) {
  value.forEach((element) => {
    // console.log("print no ", element);
  });
}
printNumber(number);

let strings = ["Ek", "Do", "Teen", "Char"];

let a = [];
function StringConvertUPP(values) {
  values.forEach((item) => {
    const Change = item.toUpperCase();
    a.push(Change);
  });
}
StringConvertUPP(strings);
// console.log(a);

let even = [];
let odd = [];

function FindNumberEvenOdd(values) {
  values.forEach((ele) => {
    if (ele % 2 === 0) {
      even.push(ele);
    } else {
      odd.push(ele);
    }
  });
}

FindNumberEvenOdd(number);
console.table([even, odd]);

const PropertyData = [
  {
    name: "Noida",
    price: "10000",
  },

  {
    name: "Delhi",
    price: "10000",
  },
];
function printPropertyData(Values) {
  Values.forEach((ele) => {
    console.log(`Property Name ${ele.name} and Price ${ele.price} `);
  });
}
printPropertyData(PropertyData);
