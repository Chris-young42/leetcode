/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;
  const newArr = new Set(nums);
  let max = 0;
  for (const item of newArr) {
    if (!newArr.has(item - 1)) {
      let current = item;
      let curLength = 1;
      while (newArr.has(current + 1)) {
        current++;
        curLength++;
      }
      max = Math.max(max, curLength);
    }
  }
  return max;
};
