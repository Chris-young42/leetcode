/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const n = s.length;

  // last[i] 表示字符 ('a' + i) 在字符串中最后一次出现的位置
  // 由于题目只包含小写字母，所以长度固定为 26
  const last = Array(26);

  // 预处理：统计每个字符的最后出现下标
  for (let i = 0; i < n; i++) {
    // charCodeAt 转成 ASCII，再减去 'a' 的 ASCII，映射到 0~25
    last[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }

  const ans = [];

  // start：当前分段的起始下标
  // end：当前分段必须覆盖到的最远下标
  let start = 0,
    end = 0;

  // 从左到右扫描字符串
  for (let i = 0; i < n; i++) {
    // 更新当前分段的右边界：
    // 取已有 end 和 当前字符最后出现位置 的最大值
    end = Math.max(end, last[s.charCodeAt(i) - "a".charCodeAt(0)]);

    // 如果当前位置 i 已经到达当前分段的最远边界
    // 说明 start ~ i 之间出现的所有字符，
    // 之后都不会再出现，可以安全切分
    if (end === i) {
      // 当前分段长度 = end - start + 1
      ans.push(end - start + 1);

      // 下一段从 i + 1 开始
      start = i + 1;
    }
  }

  return ans;
};
