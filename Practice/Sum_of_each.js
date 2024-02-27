const arrNumber = [1, 3, 50, 6, 7, 8];

const SumOfArray = arrNumber.reduce((acc, ele) => {
  return acc + ele;
}, 0);
let total = 0;

// for (let num of arrNumber) {
//   total = num + total;
// }

for (let i = 0; i < arrNumber.length; i++) {
  currentNumber = arrNumber[i];
  total = total + currentNumber;
}

console.log("total", total);
