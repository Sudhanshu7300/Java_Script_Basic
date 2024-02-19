const MyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const UpdatedValue = MyNumbers.map((ele) => {
  return ele + 10;
});

// console.log(UpdatedValue);
const newNum = [];
// MyNumbers.forEach((ele) => console.log(ele + 10));

MyNumbers.forEach((num) => {
  newNum.push(num * 10);
});
// console.log(newNum);

// Channing Method

const newNums = MyNumbers.map((ele) => ele * 10)
  .map((item) => item + 10)
  .filter((data) => data > 50);
console.log(newNums)  ;
