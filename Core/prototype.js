let arr = [1, 2, 7, 8, 3, 4, 5, 6];

Array.prototype.myFunction = function () {
  console.log(
    "check my value",
    this.filter((ele) => ele > 5)
  );
};
arr.myFunction(arr);

Array.prototype.myMap = function () {
  let newArry = [];
  for (let i = 0; i < this.length; i++) {
    newArry.push(this[i] * this[i]);
  }
  return newArry;
};
console.log(arr.myMap(arr));

Array.prototype.myFilter = function () {
  let filtredArray = [];
  for (let i = 0; i < this.length; i++) {
    if (i % 2 === 0) {
      filtredArray.push(this[i]);
    }
  }
  return filtredArray;
};

console.log(arr.myFilter(arr));

Array.prototype.customReduce = function () {
  let SumofArray = 0;
  for (let i = 0; i < this.length; i++) {
    SumofArray = SumofArray + this[i];
  }
  return SumofArray;
};
console.log(arr.customReduce(arr));
