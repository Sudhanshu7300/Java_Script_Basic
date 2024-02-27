const arrNumber = [111, 2, 43, 53, 54, 3];
let largest = -Infinity;
let secondLarge = -Infinity;
let thirdLarge = -Infinity;

for (let i = 0; i < arrNumber.length; i++) {
  currentElement = arrNumber[i];
  if (currentElement > largest) {
    secondLarge = largest;
    largest = currentElement;
  } else if (currentElement > secondLarge) {
    thirdLarge = secondLarge;
    secondLarge = currentElement;
  } else if (currentElement > thirdLarge) {
    thirdLarge = currentElement;
  }
}
console.log("largest  number:", largest);
console.log("Second largest number:", secondLarge);
console.log("thirdLarge  number:", thirdLarge);
