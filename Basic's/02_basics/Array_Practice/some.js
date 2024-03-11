// some(): Kuch items ke liye condition true hoti hai toh true return karta hai.

const number = [11, 2, 4, 16, 17, 18, 2, 1];

function FindNumber(value) {
  return value.some((ele) => {
    if (ele > 10) {
      return console.log(ele);
    }
  });
}
FindNumber(number);

var stringsArray = ["Apple", "banana", "Orange", "Mango", "pear"];

function FindString(value) {
  return value.some((ele) => {
    if (ele == "Apple") {
      return console.log(ele);
    }
  });
}

FindString(stringsArray);

function getStringValues(array) {
  const stringValues = [];
  array.some(function (element) {
    if (typeof element === "string") {
      stringValues.push(element);
      return true;
    }
  });
  return stringValues;
}

var mixedArray = [1, "hello", true, { name: "John" }];

const stringValuesArray = getStringValues(mixedArray);
console.log(stringValuesArray); // Output: ["hello"]

function containsArrayWithZeroFirstElement(nestedArray) {
  return nestedArray.some(function (innerArray) {
    return innerArray.length > 0 && innerArray[0] === 0;
  });
}

var nestedArray1 = [
  [1, 2, 3],
  [0, 4, 5],
  [6, 7, 8],
];
var nestedArray2 = [
  [9, 8, 7],
  [1, 2, 3],
  [4, 5, 6],
];

console.log(containsArrayWithZeroFirstElement(nestedArray1));
console.log(containsArrayWithZeroFirstElement(nestedArray2));
