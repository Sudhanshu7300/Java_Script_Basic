// var c = 300;
// Block Scope
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}
// console.log(c);
// Using var in JavaScript is discouraged due to its function-scoped nature, which can lead to unexpected behavior,
//     especially in large codebases.Instead, let and const are preferred because they have block-level scope

let a = 300;

if (true) {
  let a = 500;
  //   console.log("ineer", a);
}
// console.log(a);

// Block Scope:
// Variables declared with let and const have block scope.
// Block scope means that the variable is only accessible within the block in which it is declared, including any nested blocks.

// Global Scope:

// Variables declared outside of any function or block have global scope.
// Global scope means that the variable is accessible from anywhere in the code.
one();

function one() {
  const username = "Sudhanshu";
  function two() {
    const website = "myportfolio";
    console.log(username);
  }
  //   console.log(website);
  two();
}

// in world we can expression function
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5));
