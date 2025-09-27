/**
 * @param {number[]} nums - 输入数组
 * @return {number} - 返回最长递增子序列的长度
 */
var lengthOfLIS = function (nums) {
  // 特殊情况：如果数组为空，直接返回 0
  if (nums.length === 0) return 0;

  /**
   * 1. 定义 dp 数组
   * dp[i] 表示：以 nums[i] 这个元素结尾的最长递增子序列长度。
   *
   * 初始化为 1：因为最少包含它自己，长度至少为 1。
   */
  const dp = new Array(nums.length).fill(1);

  /**
   * 2. 记录全局最长递增子序列的长度
   * 初始值为 1，因为单个元素本身就是递增子序列。
   */
  let maxLen = 1;

  /**
   * 3. 外层循环：从第二个元素开始，逐个计算以 nums[i] 结尾的最长子序列
   */
  for (let i = 1; i < nums.length; i++) {
    /**
     * 4. 内层循环：遍历 i 之前的所有元素 j (0 <= j < i)
     * 目的：找出所有可以接在 nums[i] 前面的元素 nums[j]
     */
    for (let j = 0; j < i; j++) {
      // 如果当前元素 nums[i] 比之前的 nums[j] 大，说明递增
      if (nums[i] > nums[j]) {
        /**
         * 状态转移：
         * 以 nums[i] 结尾的最长子序列长度
         * = 在原有 dp[i] 和 (dp[j] + 1) 之间取最大值
         *
         * dp[j] + 1 表示：在 nums[j] 结尾的递增序列上，加上 nums[i]
         */
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }

    // 更新全局最大值
    maxLen = Math.max(maxLen, dp[i]);
  }

  // 5. 返回结果：最长递增子序列的长度
  return maxLen;
};
