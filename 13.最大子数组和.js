/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let current = 0;
  for (let num of nums) {
    current += num;
    maxSum = Math.max(maxSum, current);
    if (current < 0) {
      current = 0;
    }
  }

  return maxSum;
};
