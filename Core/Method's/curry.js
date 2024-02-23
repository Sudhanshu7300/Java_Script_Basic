// currying
// Currying is the process of transforming a function that takes multiple arguments into a sequence of functions, each taking a single argument,
// by partially applying the original function with some of its arguments, typically using techniques like function binding or closures.
function add(a, b) {
  console.log(a + b);
}

const addWith2 = add.bind(this, 4);
addWith2(6);

// Closures
function Add(x) {
  return function (y) {
    console.log(x + y);
  };
}
let AddWith2 = Add(2);
AddWith2(4);
