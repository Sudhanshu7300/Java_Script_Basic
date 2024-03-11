// function concatenate(nums) {
//   const n = nums.length;
//   const ans = new Array(2 * n);
//   for (let i = 0; i < n; i++) {
//     const value = (ans[i] = nums[i]);
//     console.log("value", value);

//     ans[i + n] = nums[i];
//   }
//   return ans;
// }

// const nums = [1, 2, 1];
// const concatenatedArray = concatenate(nums);
// console.log(concatenatedArray);

var a = 10;
console.log("Line number 2", a); // 10
function fn() {
  console.log("Line number 4", a); // undefined
  var a = 20;
  a++;
  console.log("Line number 7", a); // 21
  if (a) {
    var a = 30;
    a++;
    console.log("Line number 11", a); // 31
  }
  console.log("Line number 13", a); //21
}
fn();
console.log("line number 2", a); // 10
