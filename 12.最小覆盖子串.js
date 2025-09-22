/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // 哈希表存储t中每个字符的需求数量
  const need = {};
  // 哈希表存储当前窗口中每个字符的数量
  const windowCounts = {};

  // 初始化need和windowCounts
  for (const char of t) {
    need[char] = (need[char] || 0) + 1;
    windowCounts[char] = 0;
  }

  // 左右指针，分别表示窗口的左右边界
  let left = 0,
    right = 0;
  // 记录当前窗口中满足需求的字符数量
  let valid = 0;
  // 记录最小覆盖子串的起始索引和长度
  let start = 0,
    len = Infinity;
  // t中不同字符的数量
  const needSize = Object.keys(need).length;

  while (right < s.length) {
    // 移动右指针，扩大窗口
    const c = s[right];
    right++;

    // 如果当前字符是t中需要的，更新窗口计数
    if (need[c] !== undefined) {
      windowCounts[c]++;
      // 当窗口中该字符的数量达到需求时，valid加1
      if (windowCounts[c] === need[c]) {
        valid++;
      }
    }

    // 当窗口包含t中所有字符时，尝试缩小窗口
    while (valid === needSize) {
      // 更新最小子串
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      // 移动左指针，缩小窗口
      const d = s[left];
      left++;

      // 如果移除的字符是t中需要的，更新窗口计数
      if (need[d] !== undefined) {
        // 当窗口中该字符的数量不再满足需求时，valid减1
        if (windowCounts[d] === need[d]) {
          valid--;
        }
        windowCounts[d]--;
      }
    }
  }

  // 返回最小覆盖子串，若不存在则返回""
  return len === Infinity ? "" : s.substring(start, start + len);
};
