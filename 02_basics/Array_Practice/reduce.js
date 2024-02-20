// reduce(): Array ke items ko ek single value me reduce karta hai, jaise ki total sum ya concatenation.
function SumOfArray(values) {
  return values.reduce((acc, item) => {
    return acc + item;
  }, 0);
}

const number = [1, 4, 7, 8];
const CalcuNumber = SumOfArray(number);
// console.log(CalcuNumber);

function concatenateStrings(array) {
  return array.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, "");
}

var stringsArray = ["Hello", " ", "world", "!"];
var concatenatedString = concatenateStrings(stringsArray);
// console.log(concatenatedString);

function findMaximumNumber(array) {
  return array.reduce(function (accumulator, currentValue) {
    return Math.max(accumulator, currentValue);
  });
}
console.log(findMaximumNumber(number));

const DataEcommerce = [
  { product: "T-shirt", price: 200 },
  { product: "Jeans", price: 100 },
];
function TotalOfmyPlatoform(data) {
  return data.reduce((acc, value) => {
    return acc + value.price;
  }, 0);
}

console.log(TotalOfmyPlatoform(DataEcommerce));

const numbers = [1, 4, 7, 8, [2, 3, 5]];

function flattenArray(array) {
  return array.reduce(function (acc, value) {
    // Agar value ek array hai, to use concat() method se acc ke saath join karein
    if (Array.isArray(value)) {
      return acc.concat(flattenArray(value));
    }
    acc.push(value);
    return acc;
  }, []);
}

console.log(flattenArray(numbers));

const Input = ["$50", "$120", "$80", "$90", "$110"];

function representingThreeMethods(values) {
  let convertNumber = values.map((data) => {
    let numberWithoutDollar = data.replace("$", "");
    return Number(numberWithoutDollar);
  });
  console.log(convertNumber);
  let greaterValues = convertNumber.filter((item) => {
    return item > 100;
  });

  let totalExpense = greaterValues.reduce((acc, value) => {
    return acc + value;
  }, 0);
  return totalExpense;
}
console.log("Total expense:", representingThreeMethods(Input));
