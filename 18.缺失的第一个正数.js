/**
 * 找到数组中缺失的最小正整数
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const n = nums.length;

  // 步骤1：预处理
  // 把数组中所有 <= 0 的数替换成 n+1
  // 因为答案只可能在 [1, n+1] 范围内
  // （数组长度为 n，最多缺的数就是 n+1）
  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0) {
      nums[i] = n + 1;
    }
  }

  // 步骤2：标记出现过的正整数
  // 遍历数组，如果某个数 num 在 1~n 之间，
  // 就把 nums[num - 1] 这个位置的数标记为负数，
  // 表示 num 这个数出现过。
  for (let i = 0; i < n; i++) {
    const num = Math.abs(nums[i]); // 用绝对值，避免重复标记出错
    if (num <= n) {
      // -Math.abs(...) 确保无论之前是正还是负，都设成负数
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }

  // 步骤3：找缺失的正整数
  // 第一个仍然是正数的位置 i，说明 (i+1) 这个数没出现过
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  // 步骤4：如果 1~n 全都出现了，那答案就是 n+1
  return n + 1;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  // 1. 将数组转为Set，用于O(1)时间查找元素是否存在
  const numSet = new Set(nums);

  // 2. 最小的缺失正整数一定在 [1, nums.length + 1] 范围内
  // 比如数组长度为n，若1~n都存在，则缺失的是n+1
  for (let i = 1; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      return i; // 找到第一个缺失的正整数，直接返回
    }
  }

  // 3. 若1~nums.length都存在，缺失的是nums.length + 1
  return nums.length + 1;
};
