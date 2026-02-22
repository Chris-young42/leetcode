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
/**
 * 找出两个已排序数组的中位数
 * @param {number[]} nums1 数组1 （代码中命名为 a）
 * @param {number[]} nums2 数组2 （代码中命名为 b）
 * @return {number} 中位数
 */
var findMedianSortedArrays = function(a, b) {
    
    // 第一步：保证 a 是较短的数组，b 是较长的数组
    // 目的是为了后续只对较短的数组进行分割线枚举，提高效率
    if (a.length > b.length) {
        [a, b] = [b, a]; // 交换 a 和 b，让 a 始终是较短的数组
    }

    // 获取两个数组的长度
    const m = a.length; // 较短数组 a 的长度
    const n = b.length; // 较长数组 b 的长度

    // 第二步：为两个数组前后添加哨兵值，简化边界条件判断
    // 添加 -Infinity 表示负无穷（放在最前面，表示分割线在最左侧时左边没东西）
    // 添加 Infinity 表示正无穷（放在最后面，表示分割线在最右侧时右边没东西）
    a = [-Infinity, ...a, Infinity]; 
    b = [-Infinity, ...b, Infinity];

    // 第三步：开始寻找正确的分割线 i 和 j
    // 目标：在 a 和 b 中各找一个分割线 i 和 j，使得：
    //   1. 左边的元素总个数 == 右边的元素总个数（或左边多1，奇数长度时）
    //   2. 左边的所有元素都 <= 右边的所有元素

    // i 表示：在数组 a 中，取前 i 个元素放入左边部分（从 1 开始算，因为加了哨兵）
    // j 表示：在数组 b 中，取前 j 个元素放入左边部分
    // 总的左边元素个数应为：(m + n + 1) / 2
    // 因为我们要让左边尽可能多一个（当总长度为奇数时，左边比右边多1）
    let i = 0; // 初始时，a 的左边部分一个都不取
    let j = Math.floor((m + n + 1) / 2); // 根据总长度算出 b 应该取多少个到左边

    // 第四步：开始 while 循环，不断调整 i 和 j，直到找到合法的分割线
    while (true) {
        
        // 关键条件：检查当前分割线 i 和 j 是否满足要求
        // 要求1：a[i] <= b[j + 1]  → a分割线位置的值 <= b分割线右边的第一个值
        // 要求2：a[i + 1] > b[j]   → a分割线右边的第一个值 > b分割线位置的值
        // 这两个条件合起来就是：左边的所有元素都 <= 右边的所有元素
        if (a[i] <= b[j + 1] && a[i + 1] > b[j]) { // 注意：写成 a[i] <= b[j + 1] && b[j] <= a[i + 1] 也是一样的含义

            // 如果满足条件，说明找到了合法的分割线！
            
            // max1：左边部分的最大值（取 a[i] 和 b[j] 中较大的那个）
            const max1 = Math.max(a[i], b[j]);
            
            // min2：右边部分的最小值（取 a[i + 1] 和 b[j + 1] 中较小的那个）
            const min2 = Math.min(a[i + 1], b[j + 1]);

            // 判断总长度是奇数还是偶数，返回对应的中位数
            // (m + n) % 2 === 1 表示总长度是奇数，中位数就是左边最大值 max1
            // (m + n) % 2 === 0 表示总长度是偶数，中位数是左边最大和右边最小的平均值
            return (m + n) % 2 ? max1 : (max1 + min2) / 2;
        }

        // 如果当前分割线不满足条件，就调整 i 和 j 的位置，继续寻找
        i++; // 尝试让 a 的左边部分多包含一个元素（即分割线往右移动一位）
        j--; // 同时 b 的左边部分少包含一个元素（因为总左边个数要固定）
    }
};
