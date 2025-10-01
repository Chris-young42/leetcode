/**
 * 滑动窗口最大值
 * 给定一个数组 nums 和窗口大小 k，
 * 要求在每个长度为 k 的窗口中找到最大值。
 *
 * 思路：
 * - 用一个双端队列（deque）来维护“可能成为窗口最大值”的下标
 * - 队列里存的是数组的下标，且保证队列对应的值是递减的（单调递减队列）
 *   - 队头元素是当前窗口的最大值的下标
 *   - 队尾存的是较小的值，可能会被淘汰
 *
 * 时间复杂度：O(n)，每个元素最多入队、出队一次
 * 空间复杂度：O(k)，队列中最多存 k 个下标
 *
 * @param {number[]} nums - 输入数组
 * @param {number} k - 滑动窗口大小
 * @return {number[]} - 每个窗口的最大值组成的数组
 */
function maxSlidingWindow(nums, k) {
  const result = []; // 存放每个窗口的最大值
  const deque = [];  // 存放可能成为最大值的下标，保持单调递减

  for (let i = 0; i < nums.length; i++) {
    // 1. 保持队列单调递减
    // 如果当前元素比队尾对应的值大或相等，就把队尾弹出
    // 因为队尾的值已经不可能成为未来窗口的最大值了
    while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
      deque.pop();
    }

    // 2. 把当前元素下标放到队尾
    deque.push(i);

    // 3. 确保队头下标在窗口范围内
    // 如果队头下标已经滑出窗口（i - k），就移除它
    while (deque[0] <= i - k) {
      deque.shift();
    }

    // 4. 当窗口形成时（i >= k - 1），记录当前窗口的最大值
    // 队头就是最大值的下标
    if (i >= k - 1) {
      result.push(nums[deque[0]]);
    }
  }

  return result;
}
