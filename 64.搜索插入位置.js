/**
 * @param {number[]} nums   // 一个已经排好序（升序）的数组
 * @param {number} target   // 目标值
 * @return {number}         // 目标值在数组中的索引位置，如果不存在则返回它应该插入的位置
 */
var searchInsert = function (nums, target) {
  // 定义左右指针，分别指向数组的开头和结尾
  let left = 0;
  let right = nums.length - 1;

  // 当左指针 <= 右指针时，说明还没查找完
  while (left <= right) {
    // 计算中间位置（避免溢出，这里用 Math.floor 向下取整）
    let mid = Math.floor((left + right) / 2);

    // 如果中间位置刚好等于目标值，直接返回这个下标
    if (nums[mid] === target) {
      return mid;
    } 
    // 如果中间的数比目标值小，说明目标在右边
    else if (nums[mid] < target) {
      left = mid + 1;   // 把左边界右移
    } 
    // 如果中间的数比目标值大，说明目标在左边
    else {
      right = mid - 1;  // 把右边界左移
    }
  }

  // 循环结束还没找到目标值时，left 就是目标值应该插入的位置
  // 例如 [1,3,5,6], target = 2，最后 left 会停在 1（表示插在下标1的位置）
  return left;
};
