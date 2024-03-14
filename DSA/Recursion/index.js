function Factorial(item) {
  if (item == 0) {
    return 1;
  }
  return item * Factorial(item - 1);
}

let data = 5;
console.log(Factorial(data));
