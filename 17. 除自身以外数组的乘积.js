/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let n = nums.length;
  let result = new Array(n).fill(1);
  let leftRroduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftRroduct;
    leftRroduct *= nums[i];
  }
  let rightRroduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightRroduct;
    rightRroduct *= nums[i];
  }
  return result;
};
