/**
 * 打家劫舍问题（LeetCode 198）
 *
 * 题意：
 * 有一排房子，每间房子里都有一定的钱（nums[i] 表示第 i 间房的钱数）。
 * 但你不能偷相邻的两间房，否则会触发报警。
 * 问你最多能偷到多少钱？
 *
 * 思路：动态规划（DP）
 * ----------------------------------
 * 我们定义：
 *   dp[i] 表示偷到第 i 间房时，所能获得的最大金额。
 *
 * 转移方程：
 *   - 如果偷第 i 间房，那么前一间（i-1）不能偷，
 *     所以金额是：dp[i-2] + nums[i]
 *   - 如果不偷第 i 间房，那就取前一间的结果：dp[i-1]
 *
 *   所以：
 *     dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
 *
 * @param {number[]} nums - 每间房的钱数
 * @return {number} - 能偷到的最大金额
 */
var rob = function (nums) {
  // 边界条件：没有房子
  if (nums.length === 0) return 0;

  // 只有一间房，直接偷它
  if (nums.length === 1) return nums[0];

  // 创建 DP 数组，dp[i] 表示偷到第 i 间时的最大金额
  let dp = new Array(nums.length);

  // 第 1 间房：只有一种偷法
  dp[0] = nums[0];

  // 第 2 间房：要么偷第 1 间，要么偷第 2 间，取金额较大的
  dp[1] = Math.max(nums[0], nums[1]);

  // 从第 3 间（索引 2）开始计算
  for (let i = 2; i < nums.length; i++) {
    // ⚠️ 你原来的代码写成了 `===`（比较），应改成 `=`（赋值）
    dp[i] = Math.max(
      dp[i - 1],       // 不偷当前房子 → 金额与前一间相同
      dp[i - 2] + nums[i] // 偷当前房子 → 加上前两间的最大金额
    );
  }

  // 返回最后一间房（索引 nums.length - 1）的结果
  return dp[nums.length - 1];
};
// 优化空间复杂度的版本（O(1)空间）
// var robOptimized = function(nums) {
//     if (nums.length === 0) return 0;
//     if (nums.length === 1) return nums[0];
    
//     let prevPrev = nums[0]; // 前两个房屋的最大金额
//     let prev = Math.max(nums[0], nums[1]); // 前一个房屋的最大金额
    
//     for (let i = 2; i < nums.length; i++) {
//         let current = Math.max(prev, prevPrev + nums[i]);
//         prevPrev = prev;
//         prev = current;
//     }
    
//     return prev;
// };