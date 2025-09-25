/**
 * 自定义二分查找函数
 * @param {number[]} nums - 已排序的数组
 * @param {number} target - 目标值
 * @param {boolean} lower - 是否查找左边界（true 查找最左边的满足条件的下标，false 查找右边界的下标）
 * @return {number} 返回符合条件的下标
 */
const binarySearch = (nums, target, lower) => {
  let left = 0;
  right = nums.length - 1;
  let ans = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (lower && nums[mid]) >= target) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};

/**
 * 查找数组中 target 的起始和结束下标
 * @param {number[]} nums - 已排序的数组
 * @param {number} target - 目标值
 * @return {number[]} 返回一个长度为 2 的数组 [start, end]
 *                     如果找不到返回 [-1, -1]
 */
var searchRange = function (nums, target) {
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (
    leftIdx <= rightIdx &&
    rightIdx < nums.length &&
    nums[leftIdx] === target &&
    nums[rightIdx] === target
  ) {
    ans = [leftIdx, rightIdx];
  }
  return ans;
};
