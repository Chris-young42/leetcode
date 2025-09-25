/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let low = 0;
  let hight = m * n - 1;
  while (low <= hight) {
    const mid = Math.floor(hight - low / 2) + low;
    const x = matrix[Math.floor(mid / n)][mid % n];
    if (x < target) {
      low = mid + 1;
    } else if (x > target) {
      hight = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
