/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  const map = new Map();

  // 统计次数
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 找出现一次的
  for (const [key, val] of map) {
    if (val === 1) return key;
  }
}


var singleNumber = function(nums) {
    let ans = 0;
    for (const x of nums) {
        ans ^= x;
    }
    return ans;
};
