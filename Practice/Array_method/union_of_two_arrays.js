function UnionofArray(arg1, ...arg2) {
  let startIndex = arg1.length;
  for (let array of arg2) {
    for (let element of array) {
      if (!arg1.includes(element)) {
        arg1[startIndex++] = element;
      }
    }
  }

  return arg1;
}
let arr1 = [2, 9, 6, 8, 4];
let arr2 = [4, 8, 6, 9, 12];

let OutputUnion = UnionofArray(arr1, arr2);
console.log(OutputUnion);
