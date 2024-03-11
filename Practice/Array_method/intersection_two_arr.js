let arr1 = [2, 9, 6, 8, 4, 4, 4, 4];
let arr2 = [4, 8, 6, 9, 12];
let intersectionArr = arr1.filter((ele) => {
  return arr2.includes(ele);
});
console.log([...new Set(intersectionArr)]); // remove duplicate
