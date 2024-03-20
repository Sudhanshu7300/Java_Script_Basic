const insertNodeIntoArray = (arr, index, value) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      newArray.push(value);
    }
    newArray.push(arr[i]);
  }
  return newArray;
};

let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array:", arr);

arr = insertNodeIntoArray(arr, 2, 3);

console.log("Array after inserting element 3 at index 2:", arr);
