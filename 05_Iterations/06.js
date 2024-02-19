const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = [];

const newNumsData = myNums.filter((item) => item > 5);

// console.log(newNumsData);

myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

// console.log(newNums);

// newNums.forEach((item) => (item > 5 ? newNums.push(item) : ""));  //===========> this conditon not work because
// This code is trying to loop through each item in newNums,
//     and if an item is greater than 5, it's supposed to be added to the newNums array.
// However, using forEach like this can lead to unexpected behavior because you are modifying the array while iterating over it.

const Value = myNums.filter((ele) => {
  return ele > 5;
});

// The return statement is crucial because it determines whether an element should be included in the filtered array or not. If the condition ele > 5 is true for a particular element, true is returned, indicating that the element should be included in the filtered array. If the condition is false, false is returned, indicating that the element should be excluded.
// Without the return statement, the callback function would not explicitly specify what to return, and the result of the filter operation might not be as expected. The return statement ensures that the filtering logic is correctly implemented.

// console.log(Value);




 