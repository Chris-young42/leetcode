/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid; // 找到目标，返回索引

        // 判断左半部分是否有序
        if (nums[left] <= nums[mid]) {
            // 目标在左半有序区间内，缩小右边界
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else { // 目标不在左半，缩小左边界
                left = mid + 1;
            }
        } else { // 右半部分有序
            // 目标在右半有序区间内，缩小左边界
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else { // 目标不在右半，缩小右边界
                right = mid - 1;
            }
        }
    }
    return -1; // 未找到目标
};
