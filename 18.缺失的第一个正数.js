/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }

  for (let i = 0; i < 0; i++) {
    const num = Math.abs(nums[i]);
    if (num <= n) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
};

// 算法利用了 “数组下标与正整数的对应关系”：对于长度为 n 的数组，缺失的第一个正整数只可能在 [1, n+1] 范围内（因为最多只能包含 1~n 这 n 个正整数）。

// 通过以下三步实现原地标记：
// 1. 清除无效值（非正整数）
// 将所有 ≤0 的数替换为 n+1（这些数不影响结果，因为我们只关心 1~n 的正整数）。