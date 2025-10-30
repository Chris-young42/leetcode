/**
 * 寻找两个有序数组的中位数（时间复杂度 O(log(min(m, n)))）
 * 思想：对较短数组二分，找到一个分割点，使得左右两部分的元素数量相等且有序。
 *
 * @param {number[]} nums1 - 第一个有序数组
 * @param {number[]} nums2 - 第二个有序数组
 * @return {number} - 中位数
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 确保 nums1 是较短的那个数组（这样二分更高效）
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length; // 数组1长度
  const n = nums2.length; // 数组2长度
  const total = m + n;    // 两个数组的总长度

  let left = 0;
  let right = m; // 在较短数组上做二分查找

  // 二分循环：寻找合适的分割位置
  while (left <= right) {
    // i 是 nums1 的分割点，j 是 nums2 的分割点
    // 使得左半部分总元素数 = 右半部分总元素数（或相差1）
    const i = Math.floor((left + right) / 2);
    const j = Math.floor((total + 1) / 2) - i;

    // 分割后，左边的最大值与右边的最小值
    const Aleft = i === 0 ? -Infinity : nums1[i - 1]; // 如果 i=0，左边没有元素
    const Aright = i === m ? Infinity : nums1[i];     // 如果 i=m，右边没有元素
    const Bleft = j === 0 ? -Infinity : nums2[j - 1];
    const Bright = j === n ? Infinity : nums2[j];

    // ✅ 核心判断：分割是否正确
    // Aleft <= Bright 且 Bleft <= Aright 表示左半部分的最大值 <= 右半部分的最小值
    if (Aleft <= Bright && Bleft <= Aright) {
      // 找到正确分割点
      if (total % 2 === 0) {
        // 总长度为偶数，中位数是中间两个数的平均值
        return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
      } else {
        // 总长度为奇数，中位数是左半部分的最大值
        return Math.max(Aleft, Bleft);
      }
    } 
    // ❌ 分割太靠右：nums1左边太大
    else if (Aleft > Bright) {
      right = i - 1; // 向左收缩
    } 
    // ❌ 分割太靠左：nums1右边太小
    else {
      left = i + 1; // 向右收缩
    }
  }

  throw new Error("No median found (输入数据可能无效)");
};
