let score = "33";
// console.log(typeof score);
// console.log(typeof score);

let ValueInNumber = Number(score);

// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);


// "33" => 33
// "33Sudhanshu" => NaN
// true => 1: false => 0

let isLoggedIn = 2;

let booleanIsLoggedIn = Boolean(isLoggedIn);

// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Sudhanshu" => true

// ******************************** Operations ******************************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

// pre-increment (++a) and post-increment (a++) operators in JavaScript.

let x = 3;
const y = x++;
console.log(`x:${x}, y:${y}`);
// Here, x++ is a post-increment operation. It means that the value of x is first assigned to y, and then x is incremented by 1.
// So, at the end of this operation, y gets the value of x before it was incremented.Hence, y is 3.
//  x becomes 4 because it's incremented by 1 after the assignment.
// // Expected output: "x:4, y:3"

let a = 3;
const b = ++a;
console.log(`a:${a}, b:${b}`);

// ++a is a pre - increment operation.It means that a is first incremented by 1, and then its value is assigned to b.
// So, both a and b end up with the same value, which is 4, because a is incremented before its value is assigned to b.
// Expected output: "a:4, b:4"
