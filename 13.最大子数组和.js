/**
 * 最大子数组和（Kadane 算法）
 * 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回它的最大和。
 *
 * 思路：
 * - 使用一个变量 current 表示“以当前元素结尾的最大子数组和”
 * - 使用 maxSum 记录目前遇到过的最大子数组和
 * - 遍历数组：
 *   1. current 累加当前元素
 *   2. 用 maxSum 更新最大值
 *   3. 如果 current < 0，说明它对后续子数组的和只会产生负贡献，所以重置为 0
 *
 * 时间复杂度：O(n)  遍历一次数组
 * 空间复杂度：O(1)  只使用常数额外空间
 *
 * @param {number[]} nums - 输入数组
 * @return {number} - 最大子数组和
 */
var maxSubArray = function (nums) {
  // 初始化最大和为数组第一个元素（防止数组全是负数的情况）
  let maxSum = nums[0];
  // current 表示当前子数组的和
  let current = 0;

  for (const num of nums) {
    current += num; // 将当前元素加入当前子数组
    maxSum = Math.max(maxSum, current); // 更新最大值
    if (current < 0) {
      // 如果 current < 0，则放弃当前子数组
      // 因为继续加下去只会拖累后面的和
      current = 0;
    }
  }

  return maxSum;
};
