const arrNumbers = [5, 2, 9, 1, 7, 3, 8, 4, 6];
let maxNumber = [0];
let minNumber = arrNumbers[0];

for (let i = 0; i < arrNumbers.length; i++) {
  currentNumber = arrNumbers[i];
  if (currentNumber > maxNumber) {
    maxNumber = currentNumber;
  }
  if (currentNumber < minNumber) {
    minNumber = currentNumber;
  }
}
console.log(maxNumber);
console.log(minNumber);
