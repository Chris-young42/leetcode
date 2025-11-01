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


var majorityElement = function(nums) {
    let ans = 0, hp = 0;
    for (const x of nums) {
        if (hp === 0) { // x 是初始擂主，生命值为 1
            ans = x;
            hp = 1;
        } else { // 比武，同门加血，否则扣血
            hp += x === ans ? 1 : -1;
        }
    }
    return ans;
};

