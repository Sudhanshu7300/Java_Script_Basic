function test(x) {
  console.log(x); // Head recursion
  if (x > 0) {
    test(x - 1);
  }
  console.log(x); // Tail recursion
}
let data = 5;
test(data);
