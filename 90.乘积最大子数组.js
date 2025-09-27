/**
 * @param {number[]} nums
 * @return {number}
 *
 * 思路概述：
 *   因为遇到负数时，乘积会翻转正负（负 * 负 = 正），
 *   所以在遍历过程中我们不仅要维护到当前位置为止的最大子数组乘积（currMax），
 *   还要维护到当前位置为止的最小子数组乘积（currMin）。
 *   每一步新的 currMax 可能是：
 *     1) 当前元素本身（开始新的子数组）
 *     2) 当前元素 * 之前的 currMax（延续之前的最大子数组）
 *     3) 当前元素 * 之前的 currMin（之前的最小（负）乘积遇到负数会变大）
 */
var maxProduct = function (nums) {
  // 边界情况：数组非空（题目通常保证有至少一个元素）
  // 把 maxval、currMax、currMin 初始化为第一个元素
  // maxval：记录遍历过的位置中出现过的全局最大乘积
  // currMax：以当前索引结尾的最大乘积（局部）
  // currMin：以当前索引结尾的最小乘积（局部）
  let maxval = nums[0];
  let currMax = nums[0];
  let currMin = nums[0];

  // 从第二个元素开始遍历（因为第一个已经用来初始化）
  for (let i = 1; i < nums.length; i++) {
    // 保存上一步的 currMax 到临时变量，后面计算 currMin 时还会用到旧的 currMax
    const tempMax = currMax;

    // 计算新的 currMax：
    // 三者取最大：
    //  1) 仅取当前元素 nums[i]（表示从这里重新开始一个子数组）
    //  2) nums[i] * tempMax（将当前元素接到之前的局部最大上）
    //  3) nums[i] * currMin（将当前元素接到之前的局部最小上 —— 可能变为更大的正数）
    currMax = Math.max(nums[i], nums[i] * tempMax, nums[i] * currMin);

    // 计算新的 currMin：
    // 三者取最小（因为如果遇到负数，最小的负值乘以负数可能会变成很大的正值）
    currMin = Math.min(nums[i], nums[i] * tempMax, nums[i] * currMin);

    // 更新全局最大值（答案）
    maxval = Math.max(maxval, currMax);
  }

  // 遍历结束，返回记录到的最大乘积
  return maxval;
};
