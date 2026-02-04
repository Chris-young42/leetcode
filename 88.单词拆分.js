/**
 * @param {string} s        - 输入字符串
 * @param {string[]} wordDict - 单词字典，包含若干个可使用的单词
 * @return {boolean}          - 返回 true 或 false，表示字符串 s 是否可以被拆分成字典中的单词组合
 */
var wordBreak = function (s, wordDict) {
  /**
   * 1. 预处理：找出字典中最长单词的长度
   *    为什么要找最大长度？
   *    因为在后续 DP 循环中，我们在检查 s 的某一段是否在字典里时，
   *    没必要去回溯超过最长单词的长度，这样可以优化性能。 
   *    例如字典 ["apple", "pear"]，最大长度 maxLen = 5，
   *    那么检查 "xxxxxx" 的时候最多只需要看 5 个字符的子串。
   */
  const maxLen = Math.max(...wordDict.map((word) => word.length));

  /**
   * 2. 用 Set 存储字典单词
   *    这样在查找一个单词是否在字典中时，时间复杂度为 O(1)
   */
  const words = new Set(wordDict);

  /**
   * 3. 定义 DP 数组
   *    f[i] 表示：字符串 s 的前 i 个字符能否被拆分成字典中的单词
   *    数组长度为 n+1，因为我们需要包含 f[0]（表示空字符串）。
   *
   *    下标说明：
   *    - f[0] 表示空字符串，初始值设为 true（空字符串可以看作是被“正确拆分”的）。
   *    - f[i] 表示 s[0..i-1] 这一段字符串的可拆分情况。
   */
  const n = s.length;
  const f = Array(n + 1).fill(false);
  f[0] = true; // base case

  /**
   * 4. 状态转移
   *    外层循环：i 从 1 到 n，表示考虑前 i 个字符 s[0..i-1]
   */
  for (let i = 1; i <= n; i++) {
    /**
     * 内层循环：j 从 i-1 递减到 i - maxLen
     * j 表示切分点，把 s[0..i-1] 拆成两部分：
     *    - 前半段：s[0..j-1]
     *    - 后半段：s[j..i-1]
     *
     * 只要前半段可拆分（f[j] === true）并且后半段在字典中，
     * 那么 s[0..i-1] 也可拆分，直接标记 f[i] = true。
     */
    for (let j = i - 1; j >= Math.max(i - maxLen, 0); j--) {
      // 如果 s[j..i-1] 在字典中，并且 s[0..j-1] 可以拆分
      if (f[j] && words.has(s.slice(j, i))) {
        f[i] = true; // 表示 s[0..i-1] 可被成功拆分
        break;       // 只要找到一个有效拆分，立即停止当前内循环（剪枝优化）
      }
    }
  }

  /**
   * 5. 返回最终结果
   *    f[n] 表示整个字符串 s[0..n-1] 是否可以拆分成字典中的单词组合
   */
  return f[n];
};
