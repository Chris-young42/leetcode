/**
 * 按照顺时针顺序返回矩阵中的所有元素（螺旋遍历）
 * @param {number[][]} matrix - 输入的二维数组（矩阵）
 * @return {number[]} - 按螺旋顺序排列的一维数组
 */
var spiralOrder = function (matrix) {
  // 特殊情况：如果矩阵为空，直接返回空数组
  if (matrix.length === 0) return [];

  // 定义四个边界：
  let top = 0;                        // 当前未遍历的上边界（行索引）
  let bottom = matrix.length - 1;     // 当前未遍历的下边界（行索引）
  let left = 0;                       // 当前未遍历的左边界（列索引）
  let right = matrix[0].length - 1;   // 当前未遍历的右边界（列索引）

  const result = [];  // 存储遍历结果
  const total = matrix.length * matrix[0].length; // 矩阵中的总元素个数

  // 不断循环，直到收集完所有元素
  while (result.length < total) {

    // 1. 从左到右遍历当前上边界的行
    for (let i = left; i <= right && result.length < total; i++) {
      result.push(matrix[top][i]);
    }
    top++; // 上边界下移一行，因为这一行已经遍历完了

    // 2. 从上到下遍历当前右边界的列
    for (let i = top; i <= bottom && result.length < total; i++) {
      result.push(matrix[i][right]);
    }
    right--; // 右边界左移一列，因为这一列已经遍历完了

    // 3. 从右到左遍历当前下边界的行
    for (let i = right; i >= left && result.length < total; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--; // 下边界上移一行，因为这一行已经遍历完了

    // 4. 从下到上遍历当前左边界的列
    for (let i = bottom; i >= top && result.length < total; i--) {
      result.push(matrix[i][left]);
    }
    left++; // 左边界右移一列，因为这一列已经遍历完了
  }

  // 返回最终的遍历结果
  return result;
};
