/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                // 交换nums[j] 和 nums[j + 1]
               [nums[j] , nums[j + 1]]=[nums[j+1] , nums[j ]]
            }
        }
    }
    return nums;
};

var sortColors = function(nums) {
    let p0 = 0, p1 = 0;
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        nums[i] = 2;
        if (x <= 1) {
            nums[p1++] = 1;
        }
        if (x === 0) {
            nums[p0++] = 0;
        }
    }
};
