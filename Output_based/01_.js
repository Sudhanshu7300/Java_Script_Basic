// When you run this code and print the result of x == y, you may be surprised to see that it returns false. This is because of a limitation in how JavaScript handles floating-point numbers.
// In JavaScript, numbers are represented using the IEEE 754 standard for floating-point arithmetic. This means that not all decimal numbers can be represented exactly as binary floating-point numbers.

// ** Q1.
// let x = 0.1 + 0.2;
// console.log("---x", x);
// let y = 0.3;
// console.log(x == y);

// ** Q2.
// let x = Infinity;
// console.log(typeof x);
// Explanation: In JavaScript, Infinity is a special numeric value that represents positive infinity. It is a primitive value of the number data type.
//  When you use the typeof operator to check the type of x, it will return “number” because Infinity is a number value, albeit a special one.

// ** Q3.
// let x = "5";
// let y = 2;

// console.log(x + y);
// JavaScript performs string concatenation: it converts the number to a string and then concatenates the two strings.
//                                            So “5” and 2 are concatenated to produce the string “52”.
// console.log(x - y);
// when you use the – operator with a string and a number, JavaScript attempts to convert the string to a number.
// In this case, “5” can be converted to the number 5, so the expression evaluates to 5 – 2, which is 3.

// ** Q4.
// let x = [];
// let y = [];
// let z = x + y;
// console.log(typeof z);

// Explanation: In JavaScript, when you use the + operator with two arrays, or an array and any other object, both operands will be converted to strings before concatenation occurs. This is called implicit type coercion.
// In this case, x and y are both empty arrays, which means that z will be the empty string (“”) because both arrays will be converted to empty strings before concatenation.
// Therefore, when you use the typeof operator to check the type of z, it will return “string” because z is a string.

// ** Q5.

// let x = true;
// let y = false;
// let z = x + y && x * y;
// console.log(z);
// Explanation: In this code, x and y are both Boolean values. The + operator is used to add x and y. In JavaScript, true is converted to 1, and false is converted to 0 when used in a numeric context, so x + y will be 1 + 0, which is 1.
// The && operator is then used to perform a logical AND operation between x + y and x * y. Since x * y is 0 (because multiplying any number by false or 0 is 0), the logical AND operation will also result in 0. Therefore, z will be 0.
// When you log z to the console, it will output 0.

// ** Q6.
// function foo(a, b) {
//   console.log(arguments[1]);
// }

// foo(3);
// Explanation: In this code, the function foo() takes two arguments a and b. When the function is called on line 4 with only one argument 3, the value of a is set to 3 and the value of b is undefined because no second argument was passed.
// The arguments object is an array-like object that contains all the arguments that were passed to a function. In this case, arguments[0] would be 3, and arguments[1] would be undefined.
// Therefore, when arguments[1] are logged to the console, it will output undefined.

// ** Q7.
// let x = "false";
// let y = !x;

// console.log(y);

// Explanation: In this code, x is a string containing the value “false”. When you use the logical NOT operator (!) with a non-Boolean value, JavaScript will first convert the value to a Boolean and then negate it. Since “false” is a non-empty string, it is considered a truthy value when converted to Boolean, so !x will be the same as !true, which is false.
// Therefore, when y is logged into the console, it will output false.

// ** Q8.
// let x = 1;
// let y = "1";

// console.log(++x, ++y);

// Explanation: In this code, x is a number containing the value 1, and y is a string containing the value “1”.
// The ++ operator is used to increment the value of x and y before they are logged into the console. Since x is a number, it can be incremented numerically, and ++x will increment the value of x to 2.
// In contrast, since y is a string, it will be first converted to a number before it is incremented. The string “1” can be converted to the number 1, so ++y will also increment the value of y to 2.
// Therefore, when ++x and ++y are logged to the console, it will output 2 2.

// ** Q9.
// let x = "b";
// let y = "a";

// console.log(x + y + + y + y);
//  Explanation: In this code, x is a string containing the value “b”, and y is a string containing the value “a”.
// The expression x + y concatenates the values of x and y into the string “ba”.
// The expression +y coerces the value of y into a number. Since y is the string “a”, which cannot be coerced into a number, the result of +y is NaN.
// Finally, the expression NaN + y concatenates the string “NaN” with the value of y, which is “a”, resulting in the string “baNaNaa”.
// Therefore, when x + y + +y + y is logged to the console, it will output “baNaNaa”.

// ** Q10.
// const a = { b: { c: 2 } };
// const b = { ...a };
// a.b.c = 3;

// console.log(b.b.c);

// Explanation: In this code, a constant a is defined as an object containing another object b, which in turn contains a property c with a value of 2. Then a constant b is defined by spreading into a new object. This creates a new object b with the same properties and values as a.
// Then the value of the property c in a is changed to 3.
// When the property b.b.c is accessed from object b, it will still reference the same object as a.b.c, because b is a new object that contains the same object a.b. Therefore, the value of b.b.c will be 3.
// Therefore, when b.b.c is logged into the console, it will output 3.

// ** Q11.
// let x = [1, 2, 3];
// let [, , y] = x;
// console.log(y);

// Explanation: In this code, an array x is defined containing the elements 1, 2, and 3. Then, array destructuring is used to extract the third element of x into a variable y. The comma syntax is used to skip the first two elements of the array.
// Therefore, when y is logged into the console, it will output 3.

// ** Q12.
// let arr = [1, 2, 3];
// arr[10] = 4;

// console.log(arr.length);

// Explanation: In this code, an array arr is defined containing the elements 1, 2, and 3. The line arr[10] = 4 sets the value of the element at index 10 to 4. Since there are no elements in arr between indices 3 and 10, these indices are considered “empty slots” in the array. However, this does not affect the length of the array, which is determined by the highest index in the array plus one.

// In this case, the highest index in the array is 10, so the length of the array is 11 (since the array contains elements at indices 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10). Therefore, when arr.length is logged to the console, it will output 11.

// ** Q13.
// let x = { a: 1 };
// let y = Object.assign({}, x);
// console.log("x", typeof x);
// console.log("y", typeof y);
// console.log(x === y);
// false

// Is code mein ek object x define kiya gaya hai jisme ek property 1 ke equal hai. Phir Object.assign() method ka istemal kiya gaya hai ek naya object y banane ke liye jisme x ke samaan properties hain. Kyunki Object.assign() ek naya object bana deta hai aur asal object ko modify nahi karta, isliye x aur y do alag objects hain jinke ek jaise properties hain.
// Jab x === y ko evaluate kiya jata hai, toh yeh check karta hai ki kya x aur y memory mein same objects hain. Kyunki x aur y do alag objects hain, har ek apne alag memory address ke saath, isliye x === y false evaluate hoga.

// ** Q14.
// let x = 10;
// let y = 20;

// console.log("total = " + x + y);

// Output;
// total = 1020;

// ** Q15.
// let x = 5;
// let y = 6;
// x += x > y ? x : y;
// console.log(x);

// Output
// 11
