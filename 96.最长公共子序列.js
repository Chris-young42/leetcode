/**
 * 最长公共子序列（LCS）长度
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // 1. 获取两个字符串的长度
  const m = text1.length;
  const n = text2.length;

  // 2. 创建 (m+1) x (n+1) 的二维数组 dp，并全部初始化为 0
  //    我们使用 m+1 和 n+1 的目的是把 dp 的索引与字符串前缀长度对齐：
  //    dp[i][j] 表示 text1 的前 i 个字符（索引 0..i-1）和 text2 的前 j 个字符（索引 0..j-1）的 LCS 长度
  //    这样 dp[0][*] 和 dp[*][0] 自然对应空串，值为 0（边界条件）
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));

  // 3. 遍历所有可能的前缀长度组合，填表
  //    i 从 1 到 m 表示考虑 text1 的前 i 个字符
  //    j 从 1 到 n 表示考虑 text2 的前 j 个字符
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 因为 dp 用的是前缀长度，所以比较时用 text1[i-1] 和 text2[j-1]
      if (text1[i - 1] === text2[j - 1]) {
        // 如果当前字符相同，则最长公共子序列可以在 dp[i-1][j-1] 的基础上 +1
        // 解释：把两个相同的字符加入到两个前缀的 LCS 后面
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // 如果不同，则 LCS 要么来自去掉 text1 当前字符（dp[i-1][j]）
        // 要么来自去掉 text2 当前字符（dp[i][j-1]），取二者的最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // 4. 最终答案是 dp[m][n]，表示两个完整字符串的 LCS 长度
  return dp[m][n];
};
