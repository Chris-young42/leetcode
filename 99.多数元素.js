/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    const half = Math.floor(nums.length / 2);

    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > half) return num;
    }
};