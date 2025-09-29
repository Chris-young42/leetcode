/**
 * 题目：72. 编辑距离
 * 给定两个单词 word1 和 word2，求将 word1 转换成 word2 的最少操作次数。
 * 允许的操作有三种：
 * 1. 插入一个字符
 * 2. 删除一个字符
 * 3. 替换一个字符
 *
 * @param {string} word1 - 第一个单词
 * @param {string} word2 - 第二个单词
 * @return {number} - 返回最少操作数
 */
var minDistance = function (word1, word2) {
  const m = word1.length; // word1 的长度
  const n = word2.length; // word2 的长度

  /**
   * dp[i][j] 表示：
   * 将 word1 的前 i 个字符，转换成 word2 的前 j 个字符所需要的最少操作次数。
   *
   * 举例：
   * - dp[0][0] = 0   表示空字符串到空字符串，不需要操作。
   * - dp[2][3] = 2   表示 word1 前 2 个字符转为 word2 前 3 个字符，至少需要 2 次操作。
   *
   * dp 数组大小为 (m+1) x (n+1)，因为要包括空字符串的情况。
   */
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  // 初始化第一列：word2 为空时，word1 的前 i 个字符只能通过「删除」操作变成空字符串
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }

  // 初始化第一行：word1 为空时，word2 的前 j 个字符只能通过「插入」操作得到
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  /**
   * 开始填充 DP 表
   * 遍历 word1 和 word2 的每一个字符组合
   * i 表示 word1 处理到第 i 个字符（下标 i-1）
   * j 表示 word2 处理到第 j 个字符（下标 j-1）
   */
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 如果当前两个字符相等，不需要额外操作，直接继承左上角的结果
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        /**
         * 如果字符不相等，可以进行三种操作：
         * 1. 删除：删除 word1 的第 i 个字符，dp[i-1][j] + 1
         * 2. 插入：插入 word2[j-1] 到 word1 末尾，dp[i][j-1] + 1
         * 3. 替换：将 word1[i-1] 替换成 word2[j-1]，dp[i-1][j-1] + 1
         *
         * 我们取三种操作中的最小值 + 1
         */
        dp[i][j] =
          Math.min(
            dp[i - 1][j], // 删除
            dp[i][j - 1], // 插入
            dp[i - 1][j - 1] // 替换
          ) + 1;
      }
    }
  }

  // 返回最终结果：word1 前 m 个字符转换为 word2 前 n 个字符所需的最少操作次数
  return dp[m][n];
};
