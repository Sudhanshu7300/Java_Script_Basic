const myNums = [1, 2, 3, 4];

const MyTotal = myNums.reduce((acc, currval) => {
  return acc + currval;
}, 0);
console.log(MyTotal);
