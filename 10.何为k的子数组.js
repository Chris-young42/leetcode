/**
 * @param {number[]} nums - 输入数组
 * @param {number} k - 目标和
 * @return {number} - 返回和为 k 的连续子数组个数
 */
function subarraySum(nums, k) {
  let count = 0;   // 结果：统计有多少个子数组的和等于 k
  let sum = 0;     // 前缀和：到当前位置的累加和
  const map = new Map();

  // 初始化：前缀和为 0 出现过 1 次
  // 这样能保证一开始就能正确统计「前缀和本身等于 k」的子数组
  map.set(0, 1);

  // 遍历数组
  for (const num of nums) {
    sum += num;  // 更新当前前缀和

    // 看看之前是否存在一个前缀和 = sum - k
    // 如果有，说明从那个位置到当前这一段子数组的和 = k
    if (map.has(sum - k)) {
      count += map.get(sum - k);  
      // 注意这里加的是次数，因为可能有多个前缀和符合条件
    }

    // 记录当前前缀和出现的次数（可能以后用到）
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
}

