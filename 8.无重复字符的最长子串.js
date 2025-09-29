/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 哈希表：用于记录每个字符最近一次出现的索引
  let charIndex = {};

  // 左指针，表示当前窗口的起始位置
  let left = 0;

  // 记录最长子串的长度
  let maxLength = 0;

  // 右指针，从头到尾扫描字符串
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right]; // 当前考察的字符

    /**
     * 如果当前字符在 charIndex 中存在，并且它的位置在当前窗口内
     * 说明出现了重复字符，需要移动 left 到重复字符的下一个位置
     *
     * 例如：
     * s = "abcabcbb"
     * 当 right = 3 时，s[3] = 'a'
     * 之前 charIndex['a'] = 0，且 0 >= left
     * 出现重复 → 将 left 更新到 0 + 1 = 1
     */
    if (charIndex[currentChar] !== undefined && charIndex[currentChar] >= left) {
      // 窗口左边界跳过这个重复字符
      left = charIndex[currentChar] + 1;
    }

    // 更新当前字符的最新索引
    charIndex[currentChar] = right;

    /**
     * 计算当前窗口长度：right - left + 1
     * 并更新最大值
     */
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // 返回最长无重复子串的长度
  return maxLength;
};

