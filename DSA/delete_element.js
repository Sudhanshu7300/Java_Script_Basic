let data = [10, 20, 90, 30, 40, 50, 60];
let position = 2;

for (let i = position; i < data.length - 1; i++) {
  data[i] = data[i + 1]; // Assigns the value of the next element in the array to the current element. This effectively shifts the elements to the left.
  console.log(i);
}
data.length = data.length - 1;
console.log(data);
