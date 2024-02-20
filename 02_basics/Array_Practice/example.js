// Example demonstrating various array methods

// indexOf(): Ek item ka index dhundta hai array me, agar milta hai toh index return karta hai, nahi toh -1.
const numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(30)); // Output: 2 (Index of 30 in the array)

// push(): Array ke end me ek ya zyada items ko add karta hai.
numbers.push(60);
console.log(numbers); // Output: [10, 20, 30, 40, 50, 60]

// pop(): Array ke end se ek item ko hata deta hai aur return karta hai.
const removedItem = numbers.pop();
console.log(removedItem); // Output: 60 (Removed item from the end of the array)
console.log(numbers); // Output: [10, 20, 30, 40, 50]

// shift(): Array ke start se ek item ko hata deta hai aur return karta hai.
const shiftedItem = numbers.shift();
console.log(shiftedItem); // Output: 10 (Removed item from the start of the array)
console.log(numbers); // Output: [20, 30, 40, 50]

// unshift(): Array ke start me ek ya zyada items ko add karta hai.
numbers.unshift(5, 15);
console.log(numbers); // Output: [5, 15, 20, 30, 40, 50]

// slice(): Array ke specified portion se ek naya array banata hai.
const slicedArray = numbers.slice(2, 4);
console.log(slicedArray); // Output: [20, 30] (Portion of the array from index 2 to index 4)

// splice(): Array me items ko add ya remove karta hai.
const removedItems = numbers.splice(1, 2);
console.log(removedItems); // Output: [15, 20] (Removed items from index 1 to index 2)
console.log(numbers); // Output: [5, 30, 40, 50]

// reverse(): Array ke order ko ulta kar deta hai.
numbers.reverse();
console.log(numbers); // Output: [50, 40, 30, 5]

// sort(): Array ke items ko sort karta hai.
numbers.sort();
console.log(numbers); // Output: [30, 40, 5, 50]

// concat(): Do arrays ko ek saath join karta hai aur naya array banata hai.
const newArray = numbers.concat([60, 70]);
console.log(newArray); // Output: [30, 40, 5, 50, 60, 70]
