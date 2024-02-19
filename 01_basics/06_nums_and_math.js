const score = 500;

const balance = new Number(100);

console.log(balance);

const otherScore = 123.436;

console.log(otherScore.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN"));

// +++++++++++++++++ Maths ++++++++++++

// console.log(Math.abs(-3));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(6.9));
// console.log(Math.min(6, 9));
// console.log(Math.max(6, 9));

console.log(Math.random());

console.log(Math.random() * 10 + 1);

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
