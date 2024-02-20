// find(): Ek condition ke anurup pehla matching item ko return karta hai.

const number = [1, 2, 4, 6, 7, 8, 2, 1];

function FindEvenNumber(values) {
  return values.find((ele) => {
    if (ele % 2 === 0) {
      console.log(ele);
    }
  });
}
FindEvenNumber(number);

let strings = ["Sudhanshu", "Anuj", "Manish", "Mayank", "Ravi", "Aj"];

function FindLengthFiveValue(values) {
  return values.find((ele) => {
    if (ele.length > 5) {
      console.log(ele);
    }
  });
}
FindLengthFiveValue(strings);

function findFirstObjectName(value) {
  return value.find((obj) => {
    return obj.name && obj.name === "John";
  });
}

const arrayOfObjects = [
  { id: 1, name: "John" },
  { id: 2, age: 30 },
  { id: 3, name: "Alice" },
];

const objUpdate = findFirstObjectName(arrayOfObjects);

const nestedArray = [
  [1, 2, 3],
  ["a", "b", "c"],
  [true, false],
];

function findFirstObjectName(nestedArray) {
  return nestedArray.find((ele) => typeof ele[0] === "number");
}
const updated = findFirstObjectName(nestedArray);
console.log("updated", updated);
