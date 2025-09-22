/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const map = new Map();
  map.set(0.1);
  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count
}
