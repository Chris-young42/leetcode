/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let ans = 0;
  let curRight = 0;
  let nextRight = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    if (i === curRight) {
      curRight = nextRight;
      ans++;
    }
  }
  return ans
};
