/**
 * @param {number[]} nums - 旋转排序数组
 * @return {number} - 返回数组中的最小值
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    // 当 left 与 right 重合时，循环结束
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        // 情况 1: 中点大于最右边的值
        // 说明最小值一定在 mid 的右边
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } 
        // 情况 2: 中点小于等于最右边的值
        // 说明最小值在 mid 左边或就是 mid
        else {
            right = mid;
        }
    }

    // 最后 left 和 right 会重合，指向最小值
    return nums[left];
};
