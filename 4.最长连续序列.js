/**
 * @param {number[]} nums - 输入的数组
 * @return {number} - 返回数组中最长连续序列的长度
 *
 * 题目要求：
 * 给定一个无序整数数组，找出其中最长连续序列的长度。
 * 
 * 举例：
 * nums = [100, 4, 200, 1, 3, 2]
 * 最长连续序列是 [1, 2, 3, 4]，所以结果返回 4。
 * 
 * 时间复杂度要求：O(n)
 */
var longestConsecutive = function (nums) {
  // 如果数组为空，直接返回 0，没有任何连续序列
  if (nums.length === 0) return 0;

  /**
   * 1. 用 Set 数据结构去重，并方便 O(1) 时间判断某个数是否存在。
   *    - 为什么使用 Set：
   *      a) Set 自动去除重复数字，简化处理。
   *      b) Set 的查找效率为 O(1)，比数组 O(n) 快很多。
   */
  const newArr = new Set(nums);

  // 用于记录最长连续序列的长度
  let max = 0;

  /**
   * 2. 遍历 Set 中的每一个元素，寻找连续序列的起点
   */
  for (const item of newArr) {
    /**
     * 2.1 判断当前数字是否为某个连续序列的起点
     * 
     *   条件：当前数字 item 的前一个数字 item - 1 不在 Set 中
     *   举例：
     *   对于序列 [1, 2, 3, 4]
     *   - 当 item = 1 时，item - 1 = 0 不在 Set 中，1 是起点。
     *   - 当 item = 2 时，item - 1 = 1 在 Set 中，说明 2 不是起点，跳过。
     */
    if (!newArr.has(item - 1)) {
      // 以当前数字为起点，向后查找连续数字
      let current = item;     // 当前连续序列中的数字
      let curLength = 1;      // 当前连续序列长度，起点长度为 1

      /**
       * 2.2 向后一直查找 item + 1, item + 2 ... 直到不存在为止
       * 
       * 举例：
       * Set = {1, 2, 3, 4}
       * 从 item = 1 开始
       *   - 检查 2 是否存在，存在 -> curLength = 2
       *   - 检查 3 是否存在，存在 -> curLength = 3
       *   - 检查 4 是否存在，存在 -> curLength = 4
       *   - 检查 5 是否存在，不存在 -> 停止
       */
      while (newArr.has(current + 1)) {
        current++;      // 往后走一个数字
        curLength++;    // 序列长度 +1
      }

      /**
       * 2.3 更新最大长度
       */
      max = Math.max(max, curLength);
    }
  }

  // 3. 遍历结束后，max 中存储的就是最长连续序列的长度
  return max;
};
