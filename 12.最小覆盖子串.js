/**
 * 最小覆盖子串
 * 给定字符串 s 和 t，在 s 中找到最小的子串，使得子串包含 t 中所有字符（包括重复）。
 * 如果不存在这样的子串，返回空字符串 ""。
 *
 * 思路：滑动窗口
 * - 用两个哈希表：
 *   need：记录 t 中每个字符需要的数量
 *   windowCounts：记录当前窗口中每个字符的数量
 * - 用两个指针 left、right 表示窗口的左右边界，不断移动右指针扩展窗口，
 *   当窗口已经包含 t 的所有字符后，移动左指针缩小窗口，尝试找到更小的覆盖子串。
 *
 * 时间复杂度：O(|s| + |t|)，因为每个字符最多进出窗口一次
 * 空间复杂度：O(|s| + |t|)，哈希表存储计数
 *
 * @param {string} s - 主串
 * @param {string} t - 目标串
 * @return {string} - s 中最小覆盖 t 的子串
 */
var minWindow = function (s, t) {
  // need 存储 t 中每个字符的需求数量
  const need = {};
  // windowCounts 存储当前窗口中每个字符的数量
  const windowCounts = {};

  // 初始化 need 和 windowCounts
  for (const char of t) {
    need[char] = (need[char] || 0) + 1; // t 里需要的字符
    windowCounts[char] = 0; // 先都置为 0
  }

  // 窗口左右边界
  let left = 0, right = 0;
  // valid 表示窗口中有多少字符满足了 need 的要求
  let valid = 0;
  // 记录最小子串的起点和长度
  let start = 0, len = Infinity;
  // t 中不同字符的个数
  const needSize = Object.keys(need).length;

  // 开始移动右指针
  while (right < s.length) {
    const c = s[right]; // 当前要进入窗口的字符
    right++; // 扩大窗口

    // 如果当前字符是 t 中需要的
    if (need[c] !== undefined) {
      windowCounts[c]++; // 窗口中该字符数量+1
      // 如果这个字符的数量刚好达到需要值，valid+1
      if (windowCounts[c] === need[c]) {
        valid++;
      }
    }

    // 当窗口已经满足 t 的所有需求时，开始尝试缩小窗口
    while (valid === needSize) {
      // 如果当前窗口更小，就更新最优解
      if (right - left < len) {
        start = left;
        len = right - left;
      }

      // 准备移出窗口的字符
      const d = s[left];
      left++; // 缩小窗口

      // 如果移出的是 t 中需要的字符，更新窗口计数
      if (need[d] !== undefined) {
        // 如果移出后数量不足，valid 减 1
        if (windowCounts[d] === need[d]) {
          valid--;
        }
        windowCounts[d]--; // 数量减少
      }
    }
  }

  // 如果 len 没有被更新过，说明没有满足条件的子串
  return len === Infinity ? "" : s.substring(start, start + len);
};
