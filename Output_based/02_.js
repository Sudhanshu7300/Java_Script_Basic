// ** Q.16
// const arr = [1, 2, 3];
// arr.forEach((num) => num * 2);
// console.log(arr);

// Explanation: The forEach method is called on arr, which iterates over each element in the array and applies the function (num) => num * 2 to each element. This function doubles the value of each element but does not modify the original array, since it does not mutate the array in place. The console.log method is called with arr as its argument, which outputs the contents of the array to the console.
// Since the original array was not mutated, the output is [1, 2, 3].
// forEach(): Har item par ek function ko call karta hai, lekin koi naya array nahi banata hai.

// ** Q.17
// let a = [1, 2, 3];
// a.push(a[2]++);

// console.log(a);
// Is code mein ek array a define kiya gaya hai jisme 1, 2 aur 3 values hain. Fir a.push(a[2]++); line execute hoti hai. Iss line mein sabse pehle a[2] ki value uthai jaati hai, jo ki 3 hai. Fir ++ operator ke saath use kiya gaya hai, jo ki a[2] ki value ko increment karta hai. Isliye, a[2] ki value 4 ho jaati hai. Phir a.push() function ke zariye, 4 ko array a mein add kiya jaata hai. Lekin a.push() function ka return value wo naya length hota hai, jo ki iss case mein 4 hai, kyunki 4 elements hain array a mein. Lekin a.push(a[2]++) ka jo purana value hai, wo push hone se pehle ki value hoti hai, jo ki 3 thi. Isliye a.push() ka return value 3 hota hai.
// Toh, code execute hone ke baad, array a mein [1, 2, 4, 3] ye values hain aur a.push(a[2]++) ka return value 3 hai.

// ** Q.18
// let x = {
//   y: "z",
//   print: () => {
//     return this.y === "z";
//   },
// };

// console.log(x.print());
// The print method uses an arrow function, which means that this refers to the global object, not the x object that print is a property of. Therefore, this.y is undefined, and the expression this.y === “z” evaluates to false.
// The result of x.print() is false, which gets outputted to the console.

// ** Q.19
// let x = [1, 2, 3];
// let y = x.join("");
// console.log(typeof y);

// ** Q.20
// let margin = "10px";
// let x = parseInt(margin);
// console.log(parseInt(x));
// Output;
// 10;

// ** Q.21
// let x = [null, 0, "0", false, "a"];
// let y = x.filter((value) => value);
// console.log(y);

// Output
// [ '0', 'a' ]

// ** Q.22
// let x = [1];
// let y = x + 1;

// console.log(y);
//  Output
// 11
// Explanation: In this code, the + operator is used to concatenate the array x with the number 1. When a value of a different type is concatenated with an array, the array is first converted to a string using the toString() method. The toString() method for an array returns a comma-separated list of its elements enclosed in square brackets, like [1]. So, the concatenation of x with 1 results in the string “1” + “1”, which gives “11”. Therefore, the output of console.log(y) will be “11”.

// ** Q.22
// let x = 7;
// let y = (typeof x).length;
// console.log(y);

// Output
// 6

// ** Q.23
// let x = [1, 2, 3];
// let y = x.slice();
// console.log(y, x === y);
// Output
// [ 1, 2, 3 ] false

// Explanation: In this code, the slice() method is used to create a shallow copy of the array x. The slice() method returns a new array with the same elements as the original array. Since the slice() method creates a new array, it does not modify the original array x.
// The new array is assigned to the variable y. The equality operator === is used to compare x and y for identity, i.e., whether they refer to the same object in memory. Since y is a new array that has the same elements as x but is a different object in memory, the comparison x === y returns false.
// Therefore, the output of console.log(y, x === y) will be the string representation of the array y followed by false.

// ** Q.24

// let x = 018;
// let y = 015;

// console.log(x - y);

// Output
// 5
// Explanation: In this code, the variables x and y are assigned values in octal (base 8) notation because the leading zero in a numeric literal in JavaScript indicates that the number is in octal notation.
// However, starting with ECMAScript 2015 (ES6), the use of a leading zero to denote an octal number literal is deprecated in strict mode and will cause a SyntaxError when encountered. So, to avoid confusion, it’s recommended to avoid using leading zeros in numeric literals.
// The values of x and y are 18 and 13 in decimal (base 10) notation, respectively.
// The expression x – y subtracts the value of y from the value of x. Therefore, x – y is equivalent to 18 – 13, which evaluates to 5.
// Therefore, the output of console.log(x – y) will be 5.

// ** Q.25
// let a = [1, 2, 3];
// let b = [4, 5, 6];

// console.log(a + b);
