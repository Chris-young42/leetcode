/**
 * 将 nums 就地修改为下一个字典序排列
 * @param {number[]} nums
 * @return {void} 不返回值，直接修改 nums
 */
var nextPermutation = function (nums) {
  const n = nums.length;

  // 1. 从右向左找到第一个 i，使得 nums[i] < nums[i+1]
  //    也就是找到第一个“上升”位置（与右边比较），
  //    或者可以理解为找到最长非递增后缀的前一个元素的下标。
  let i = n - 2; // 从倒数第二个下标开始检查（因为需要访问 i+1）
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  // 退出后：
  // - 如果 i >= 0，说明找到了一个位置可以增大（存在下一个排列）
  // - 如果 i < 0，说明整个数组是非增序列（例如 [3,2,1]），已经是最大的排列

  // 2. 如果找到了这样的 i（即 i >= 0），在右侧寻找一个 j
  //    从右向左找到第一个 nums[j] > nums[i]
  //    由于右侧是非增的，找到的第一个 nums[j] > nums[i] 实际上是
  //    右侧比 nums[i] 大的**最小**元素（在字典序上刚好比当前更大）。
  if (i >= 0) {
    let j = n - 1; // 从数组右端开始找
    while (nums[j] <= nums[i]) {
      j--;
    }
    // 现在 nums[j] > nums[i]，并且 j 是最右侧满足的索引
    // 交换 nums[i] 和 nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
    // 交换后，前缀 [0..i] 比原来更大，但右侧仍是非增的，
    // 要把右侧变成最小可能的排列（升序），所以接下来反转右侧。
  }

  // 3. 反转 i+1 到末尾，使这个后缀变成升序（即最小排列）
  //    如果 i < 0（没有找到下降点），i+1 = 0，这一步会把整个数组反转为升序
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  // 函数结束，nums 已被修改为下一个排列（或最小排列）
};
