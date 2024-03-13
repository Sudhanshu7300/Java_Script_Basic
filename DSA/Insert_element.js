let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
let newEle = 3;
let position = 2;
for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= position) {
    arr[i + 1] = arr[i]; // Moves the current element to the next position in the array. This effectively shifts elements to the right.
    if (i === position) {
      arr[i] = newEle;
    }
  }
}
console.log(arr);

arr.splice(10, 0, 11);
console.log(arr);
