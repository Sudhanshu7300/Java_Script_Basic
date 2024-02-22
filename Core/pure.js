// Impure function
let a = 5;
// Depend on external factor
function addNum(b) {
  console.log("A+B====", a + b);
}
addNum(2);

// Pure function  always return for the same set of argument
function addNum2(a, b) {
  console.log("A+B====", a + b); // side Effect
  return a + b; // no side effect
}
addNum2(2, 3);
