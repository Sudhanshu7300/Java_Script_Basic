// console.log(a.concat(b));
// console.log([...arr1, ...arr2]);

// ** create Custom Method
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
function mergeArrays(firstArray, ...value) {
  let startIndex = firstArray.length;
  for (let array of value) {
    for (let element of array) {
      firstArray[startIndex++] = element;
    }
  }
  return firstArray;
}

let array3 = [7, 8, 9];

let output = mergeArrays(array1, array2, array3);
console.log(output);

// function pushArray(array, ...elements) {
//   for (let num of elements) {
//     array[array.length] = num;
//   }
//   return array;
// }

// let array4 = [10, 11, 12];
// pushArray(array4, 2, 22, 30);
// console.log(array4);
