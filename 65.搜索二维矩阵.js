/**
 * @param {number[][]} matrix   // 已经排好序的二维矩阵
 * @param {number} target       // 目标值
 * @return {boolean}            // 找到返回 true，否则 false
 */
var searchMatrix = function (matrix, target) {
  // m = 行数，n = 列数
  const m = matrix.length;
  const n = matrix[0].length;

  // 把二维矩阵看成一维数组，所以我们用左右边界来做二分查找
  // 0 是一维数组的第一个下标
  let low = 0;
  // m * n - 1 是一维数组的最后一个下标
  let high = m * n - 1;

  // 当左边界 <= 右边界，表示还有范围可以查
  while (low <= high) {
    // 中点的计算
    // Math.floor((low + high) / 2) 比较清晰
    const mid = Math.floor((low + high) / 2);

    // 把一维下标 mid 转成二维坐标
    // mid / n 得到“行”
    // mid % n 得到“列”
    const x = matrix[Math.floor(mid / n)][mid % n];

    // 如果当前中点的值 < 目标值 → 目标在右边
    if (x < target) {
      low = mid + 1;
    }
    // 如果当前中点的值 > 目标值 → 目标在左边
    else if (x > target) {
      high = mid - 1;
    }
    // 如果刚好相等 → 找到了
    else {
      return true;
    }
  }

  // 跳出循环表示没找到
  return false;
};

