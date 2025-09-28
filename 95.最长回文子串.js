/**
 * 寻找字符串中的最长回文子串
 * @param {string} s - 输入字符串
 * @return {string} - 最长回文子串
 */
var longestPalindrome = function (s) {
  const n = s.length; // 字符串长度
  if (n < 2) return s; // 如果字符串长度小于2，则本身就是回文，直接返回

  /**
   * dp[i][j] 表示 s[i..j]（从 i 到 j 下标的子串）是否是回文串
   * 
   * true  → 是回文
   * false → 不是回文
   */
  const dp = Array.from(Array(n), () => Array(n).fill(false));

  let start = 0;   // 记录最长回文子串的起始位置
  let maxLen = 1;  // 记录最长回文子串的长度，最少为 1（单个字符）

  // 所有单个字符本身都是回文串，比如 "a"、"b"、"c"
  for (let i = 0; i < n; i++) {
    dp[i][i] = true;
  }

  /**
   * l 表示子串的长度，最小为 2
   * 我们要检查所有长度为 l 的子串，看它是不是回文
   * 
   * 外层循环：从长度 2 开始，一直检查到字符串的总长度 n
   */
  for (let l = 2; l <= n; l++) {

    // i 表示子串的起始位置
    for (let i = 0; i < n; i++) {
      const j = i + l - 1; // 子串的结束位置

      // 如果结束位置 j 超出字符串范围，停止
      if (j >= n) break;

      // 如果首尾字符不同，s[i..j] 一定不是回文
      if (s[i] !== s[j]) {
        dp[i][j] = false;
      } else {
        /**
         * 如果首尾字符相同，有两种情况：
         * 1. l <= 3
         *    比如 "aa"、"aba"
         *    这种情况下只要首尾相同，整个子串就是回文
         *
         * 2. l > 3
         *    比如 "abca", 需要看中间部分 s[i+1..j-1] 是否为回文
         *    只有中间部分也是回文，整个才是回文
         */
        if (l <= 3) {
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i + 1][j - 1];
        }
      }

      // 如果 s[i..j] 是回文，并且长度比之前记录的 maxLen 更长，则更新
      if (dp[i][j] && l > maxLen) {
        maxLen = l; // 更新最大长度
        start = i;  // 更新起始位置
      }
    }
  }

  // 根据记录的 start 和 maxLen，截取最长回文子串
  return s.substring(start, start + maxLen);
};
