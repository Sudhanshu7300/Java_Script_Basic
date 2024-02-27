let arrNumber = [1, 2, 3, 4, 5];

let total = 1;
for (let num of arrNumber) {
  total = num * total;
}

for (let i = 0; i < arrNumber.length; i++) {
  currentNumber = arrNumber[i];
  total = currentNumber * total;
}
