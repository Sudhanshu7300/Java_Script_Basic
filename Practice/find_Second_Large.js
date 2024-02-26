const arrNumber = [1, 2, 43, 53, 3];
let largest = arrNumber[0];
let secondLarge = arrNumber[0];

for (let num of arrNumber) {
  if (num > secondLarge) {
    secondLarge = largest;
    largest = num;
  }
}
console.log(secondLarge);
