/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
  let rows = matrix.length;
  let cols = matrix[0].length;
  let row = 0;
  let col = cols - 1;
  while (row < rows && col >= 0) {
    const current = matrix[row][col];
    if (current === target) {
      return true;
    } else if (current > target) {
      col--;
    } else {
      row++;
    }
  }
  return false
};
