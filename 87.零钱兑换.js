/**
 * @param {number[]} coins  - 可用的硬币面额数组（每种面额数量无限）
 * @param {number} amount   - 目标金额
 * @return {number}         - 最少硬币数量；若无法凑出返回 -1
 */
var coinChange = function (coins, amount) {
  // --- 特殊/边界情况 ---
  // 如果目标金额为 0，什么都不需要，直接返回 0
  if (amount === 0) return 0;

  // --- 状态定义（DP 数组） ---
  // dp[i] 表示：凑成金额 i 所需的最少硬币个数
  // 我们把数组初始化为 amount + 1，作为“无穷大”的替代（因为最多不会超过 amount 个硬币）
  // 例如 amount = 11，最糟情况下用 11 个面额为 1 的硬币，所以 amount+1 是一个不可能达到的值。
  const dp = new Array(amount + 1).fill(amount + 1);

  // base case：凑成金额 0 需要 0 个硬币
  dp[0] = 0;

  // --- 状态转移（核心双重循环） ---
  // 外层：遍历所有目标金额，从 1 到 amount
  for (let i = 1; i <= amount; i++) {
    // 内层：尝试用每一种硬币去更新 dp[i]
    for (const c of coins) {
      // 只有当硬币面额 c 不大于当前目标 i 时，才有意义去使用它
      if (c <= i) {
        // 如果选择使用一个面额为 c 的硬币，那么还需要凑出 i - c 的金额
        // dp[i - c] 就表示凑出 i - c 所需的最少硬币数，再加上当前用的 1 个硬币
        // 于是候选值为 dp[i - c] + 1
        // 与当前 dp[i] 比较，取最小值（我们要最少的硬币数）
        dp[i] = Math.min(dp[i], dp[i - c] + 1);
      }
    }
    // 循环结束后，dp[i] 即为凑成金额 i 的最少硬币数（若仍为 amount+1 则表示无解）
  }

  // --- 返回结果 ---
  // 如果 dp[amount] 仍然 > amount，说明没有任何组合能凑出目标金额，返回 -1
  // 否则返回 dp[amount]（最少硬币数）
  return dp[amount] > amount ? -1 : dp[amount];
};
