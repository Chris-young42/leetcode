/**
 * 题目：找到字符串中所有字母异位词
 *
 * 给定两个字符串 s 和 p，找出 s 中所有 p 的字母异位词的起始索引。
 *
 * - 字母异位词：两个字符串中的字母相同，但顺序可以不同。
 *   例如："abc" 和 "bca" 是异位词。
 *
 * 示例：
 * s = "cbaebabacd", p = "abc"
 * 输出：[0, 6]
 * 解释：
 * - s[0..2] = "cba" 是 "abc" 的异位词
 * - s[6..8] = "bac" 是 "abc" 的异位词
 *
 * 核心思路：滑动窗口 + 字符频率统计
 * - 通过一个窗口来遍历 s，每次窗口长度都固定为 p.length。
 * - 统计窗口中每个字符出现的次数，并与 p 的字符频率进行比较。
 *
 * 时间复杂度：O(n * 26) ≈ O(n)
 * - n = s.length
 * - 每次比较两个长度为 26 的数组（常数操作）。
 *
 * @param {string} s - 主串
 * @param {string} p - 模式串（目标异位词）
 * @return {number[]} 返回所有异位词子串的起始索引
 */
var findAnagrams = function (s, p) {
  const res = []; // 存储所有匹配起始位置
  const sLen = s.length;
  const pLen = p.length;

  // 如果 s 比 p 短，不可能有异位词
  if (sLen < pLen) {
    return res;
  }

  // 频率数组：长度固定为 26（对应 26 个字母）
  // sCount：记录当前窗口中每个字母的数量
  // pCount：记录 p 中每个字母的数量
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);

  // 初始化阶段：统计 p 中字符频率 & s 的前 pLen 个字符频率
  for (let i = 0; i < pLen; i++) {
    // 计算 p 中字符频率
    pCount[p.charCodeAt(i) - "a".charCodeAt(0)]++;

    // 计算 s 的前 pLen 个字符频率
    sCount[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  // 判断初始窗口 [0, pLen-1] 是否匹配
  if (isEqual(sCount, pCount)) {
    res.push(0);
  }

  /**
   * 滑动窗口开始移动
   * 窗口从 i = pLen 开始向右滑动
   * 每次移动：
   * 1. 移除窗口最左边的字符
   * 2. 添加窗口新进入的字符
   * 3. 判断当前窗口是否是异位词
   */
  for (let i = pLen; i < sLen; i++) {
    // 1. 移除旧字符（窗口最左边的字符）
    // i - pLen 是要被移除的字符索引
    sCount[s.charCodeAt(i - pLen) - "a".charCodeAt(0)]--;

    // 2. 添加新字符（窗口最右边新加入的字符）
    sCount[s.charCodeAt(i) - "a".charCodeAt(0)]++;

    // 3. 判断当前窗口是否匹配
    if (isEqual(sCount, pCount)) {
      // 起始位置是 i - pLen + 1
      res.push(i - pLen + 1);
    }
  }

  return res;
};

/**
 * 工具函数：判断两个频率数组是否完全相同
 * 
 * 这里数组长度固定为 26，代表 26 个字母。
 * 如果每个字母的计数完全一致，就说明两个子串是异位词。
 */
function isEqual(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[2]) {
            return false
        }
    }
    return true
}