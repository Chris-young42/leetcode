/**
 * 自定义二分查找函数
 * @param {number[]} nums - 已排序的数组
 * @param {number} target - 目标值
 * @param {boolean} lower - 是否查找左边界（true 查找最左边的满足条件的下标，false 查找右边界的下标）
 * @return {number} 返回符合条件的下标
 */
const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1;

    // ans 初始化为数组长度，表示“未找到”，方便后续处理
    let ans = nums.length;

    // 标准二分查找模板
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 中点

        /**
         * lower = true 表示查找左边界:
         *   条件：nums[mid] >= target
         *   - nums[mid] > target 说明 mid 偏大，需要收缩右边界
         *   - nums[mid] == target 仍然要继续往左边找，保证找到最左边的位置
         *
         * lower = false 表示查找右边界的下一个位置:
         *   条件：nums[mid] > target
         */
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            // 缩小右边界，同时记录当前 mid 作为可能的答案
            right = mid - 1;
            ans = mid;
        } else {
            // 当前值小于目标值，说明目标值可能在右边
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
var searchRange = function(nums, target) {
    // 初始化结果为 [-1, -1] 表示未找到
    let ans = [-1, -1];

    // 查找左边界：第一个 >= target 的位置
    const leftIdx = binarySearch(nums, target, true);

    // 查找右边界：第一个 > target 的位置，然后减 1 得到最后一个 == target 的位置
    const rightIdx = binarySearch(nums, target, false) - 1;

    /**
     * 验证结果是否有效：
     * 1. leftIdx <= rightIdx 确保范围有效
     * 2. rightIdx < nums.length 确保索引不越界
     * 3. nums[leftIdx] === target && nums[rightIdx] === target 确保确实找到了目标值
     */
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
