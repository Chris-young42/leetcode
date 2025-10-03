/**
 * 旋转数组
 * 给定一个数组 nums，将数组中的元素向右移动 k 步，其中 k 是非负数。
 * 要求：原地修改，不使用额外数组。
 *
 * 思路：三次反转法
 * 假设 nums = [1,2,3,4,5,6,7], k = 3
 * 目标： [5,6,7,1,2,3,4]
 *
 * 步骤：
 * 1. 整体反转数组 → [7,6,5,4,3,2,1]
 * 2. 反转前 k 个元素（0 到 k-1） → [5,6,7,4,3,2,1]
 * 3. 反转后 n-k 个元素（k 到 n-1） → [5,6,7,1,2,3,4]
 *
 * 时间复杂度：O(n)，每个元素最多交换 2 次
 * 空间复杂度：O(1)，只用常数空间
 *
 * @param {number[]} nums - 输入数组
 * @param {number} k - 旋转的步数
 * @return {void} - 原地修改数组
 */
var rotate = function (nums, k) {
  const n = nums.length;
  // 防止 k > n 的情况，取余即可
  k = k % n;

  // 工具函数：反转数组区间 [start, end]
  const reverse = (start, end) => {
    while (start < end) {
      // 交换两端元素
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  };

  // 1. 反转整个数组
  reverse(0, n - 1);
  // 2. 反转前 k 个元素
  reverse(0, k - 1);
  // 3. 反转后 n-k 个元素
  reverse(k, n - 1);

  return nums; // 题目说不返回也可以，这里方便调试
};
