// Map= array ke har item par ek function apply karta hai aur ek naya array return karta hai.
const numbers = [1, 2, 3, 4, 5];
// Question1
const UpdatedData = numbers.map((ele) => ele * 2);
// Question2
let strings = ["Ek", "Do", "Teen", "Char"];
const UpdatedString = strings.map((ele) => ele.length);
// Question3

const JsUser = [
  {
    name: "Sudhanshu",
    age: 19,
  },
  {
    name: "Anuj",
    age: 19,
  },
];
JsUser.map((item) => {
  // console.log(`${item.name} ${item.age}  saal ka hai`);
});
// Question 4
// console.log(numbers.map((item) => item + 1));

// Question 5
// console.log(strings.map((item) => item.toLowerCase()));

//Question 6
// console.log(
//   numbers
//     .map((item) => {
//       if (item % 2 === 0) {
//         return item;
//       }
//     })
//     .filter((num) => num !== undefined)
// );

function reverseString(names) {
  return names.map((ele) => ele.split("").reverse().join(""));
}

let reversedArray = reverseString(strings);
console.log(reversedArray);

// Function definition
function multiplyByFactor(numbers, factor) {
  return numbers.map((number) => number * factor);
}

// Example usage
const factor = 3;
console.log(multiplyByFactor(numbers, factor));

// Function definition
function formatProducts(products) {
  return products.map((product) => {
    return `Utpaad: ${product.name}, Daam: ${product.price}`;
  });
}

// Example usage
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 10000 },
];

console.log(formatProducts(products));

console.log(
  strings
    .map((ele) => {
      if (ele.length > 2) {
        return ele;
      }
    })
    .filter((ele) => !!ele)
);
