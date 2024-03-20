const removeElementFromArray = (arr, elementToRemove) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== elementToRemove) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

// Example usage:
let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array:", arr);

arr = removeElementFromArray(arr, 6);

console.log("Array after removing element 6:", arr);
