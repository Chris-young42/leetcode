/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length-1;
  const result = [];
  const total = matrix.length * matrix[0].length;
  while (result.length < total) {
    for (let i = left; i <= right && result.length < total; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom && result.length < total; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left && result.length < total; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && result.length < total; i--) {
      result.push(matrix[i][left]);
    }
    left++
  }
  return result
};
