// every(): Sabhi items ke liye condition true hoti hai toh true return karta hai.

const numbers = [12, 15, 18, 20, 25];

const update = numbers.every((ele) => ele > 10);

console.log(update);

function checkIfAllApples(array) {
  return array.every(function (str) {
    return str === "apple";
    // return typeof str === "string";
  });
}

const fruits = ["apple", "apple", "apple", "apple"];
console.log(checkIfAllApples(fruits));

const mixedFruits = ["apple", "orange", "apple", "banana"];
console.log(checkIfAllApples(mixedFruits));
