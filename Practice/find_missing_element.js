let arr = [1, 3, 4, 5];
// 1+2+3+4+5+6 = 21
ArrayLength = arr.length;
let total = ((ArrayLength + 1) * (ArrayLength + 2)) / 2;

for (i = 0; i < arr.length; i++) {
  currentNumber = arr[i];
  total = total - currentNumber;
}
console.log(total);
