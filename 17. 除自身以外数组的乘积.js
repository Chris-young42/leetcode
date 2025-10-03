/**
 * 除自身以外数组的乘积
 * 给定一个数组 nums，返回一个新数组 result，
 * 其中 result[i] 等于 nums 中除了 nums[i] 以外所有元素的乘积。
 *
 * 要求：
 * - 时间复杂度 O(n)
 * - 不能使用除法
 * - 额外空间复杂度 O(1)（不算返回的 result）
 *
 * 思路：
 * 1. 先算每个位置左边所有数的乘积，存到 result[i]
 * 2. 再从右往左遍历，用一个变量保存右边所有数的乘积，乘到 result[i] 上
 * 
 * 举例：nums = [1,2,3,4]
 * - 左积阶段： result = [1,1,2,6]   // 不包含自己左边的乘积
 * - 右积阶段： result = [24,12,8,6] // 乘上右边的乘积
 *
 * @param {number[]} nums - 输入数组
 * @return {number[]} - 除自身以外的乘积数组
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // 1. 前缀积：计算每个位置左边的所有数的乘积
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;   // result[i] 先存左边的乘积
    leftProduct *= nums[i];    // 更新左边乘积（包括当前 nums[i]）
  }

  // 2. 后缀积：从右往左计算右边的乘积，并乘到 result[i] 上
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct; // 乘上右边的乘积
    rightProduct *= nums[i];   // 更新右边乘积（包括当前 nums[i]）
  }

  return result;
};
