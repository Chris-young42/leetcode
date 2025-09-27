/**
 * @param {number[]} nums - 输入数组
 * @return {boolean}      - 是否可以划分为两个和相等的子集
 */
var canPartition = function (nums) {
  // 1. 计算数组总和
  const sum = nums.reduce((acc, cur) => acc + cur, 0);

  // 2. 如果总和为奇数，无法平分 → 直接返回 false
  if (sum % 2 !== 0) return false;

  // 3. 目标子集和 = 总和的一半
  const target = sum / 2;

  // 4. 定义 dp 数组：
  // dp[j] 表示是否可以从数组中选出若干元素，使它们的和为 j
  // 初始化为 false
  const dp = new Array(target + 1).fill(false);

  // 5. base case：和为 0 的子集总是存在（空集）
  dp[0] = true;

  // 6. 遍历数组中的每一个元素
  for (const num of nums) {
    /**
     * 7. 倒序遍历 dp 数组
     * 从 target 到 num：
     *   - 倒序的目的是保证每个元素只用一次（0-1 背包）
     *   - 如果正序，会重复使用同一个元素
     */
    for (let j = target; j >= num; j--) {
      /**
       * 状态转移：
       * dp[j] = dp[j] || dp[j - num]
       *
       * 含义：
       *  - dp[j] 原本可能已经可以组成 j，保持 true
       *  - dp[j - num] 表示是否可以组成 j - num
       *    如果可以组成 j - num，再加上当前 num，就可以组成 j
       */
      dp[j] = dp[j] || dp[j - num];
    }
  }

  // 8. 返回结果：
  // dp[target] 表示是否存在子集和等于 sum / 2
  return dp[target];
};
