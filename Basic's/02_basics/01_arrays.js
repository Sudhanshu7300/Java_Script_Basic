let myArr = [2, 3, 7, 9, 23, 75, 4];

// console.log(myArr.copyWithin(2, 6, 7));
const array1 = ["a", "b", "c", "d", "e"];
// Copy to index 0 the element at index 3
// console.log(array1.copyWithin(0, 3, 4));
const isBelowThreshold = (currentValue) => currentValue < 40;
const array2 = [1, 30, 39, 29, 10, 13];
// console.log(array2.every(isBelowThreshold));
// Expected output: true

const Join = array2.join();
// console.log(typeof Join);
// console.log(array2);

// console.log(array2.slice(1, 3));
// console.log(array2);

// console.log(array2.splice(1, 3));
// console.log(array2);

// splice(): It is used to modify the contents of an array by removing or replacing existing elements and/or adding new elements.
// slice(): It is used to create a new array containing a portion of the original array, without modifying the original array.

const array = [1, 2, 3, 4, 5];
const arr1 = array.slice(1 - 3);
// console.log(arr1);
// console.log(array.slice(-2));
// use -1 as the argument it  means  starts counting from the end of the array.

// merge multiple arrays using concat as well like spread syntax..

const Array1 = [1, 2, 3, 4, 5];
const Array2 = [5, 6, 7, 8, 9, 10];
const Array3 = [0, 0, 0];
const Array4 = [1, 3, 9, 19];
const concatAll = Array1.concat(Array2, Array3, Array4);
const AllArryaconvert = [...Array1, ...Array2];
const result = Array4.some((ele) => Array1.includes(ele));

console.log(Array.from({ name: "Sudhanshu", number: "8077445365" }));
