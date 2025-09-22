/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const n = nums.length;
  const ans = [];
  const path = [];
  function dfs(i) {
    if (i === n) {
      ans.push(path.slice());
      return;
    }
    dfs(i + 1);
    path.push(nums[i]);
    dfs(i + 1);
    path.pop();
  }
  dfs(0);
  return ans;
};
