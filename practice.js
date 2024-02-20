function concatenate(nums) {
  const n = nums.length;
  const ans = new Array(2 * n);
  for (let i = 0; i < n; i++) {
    const value = (ans[i] = nums[i]);
    console.log("value", value);

    ans[i + n] = nums[i];
  }
  return ans;
}

const nums = [1, 2, 1];
const concatenatedArray = concatenate(nums);
console.log(concatenatedArray);
