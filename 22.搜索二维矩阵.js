/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 处理边界情况
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    // 获取矩阵的行数和列数
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    // 从右上角开始搜索
    let row = 0;
    let col = cols - 1;
    
    while (row < rows && col >= 0) {
        const current = matrix[row][col];
        
        if (current === target) {
            // 找到目标值
            return true;
        } else if (current > target) {
            // 当前值大于目标值，向左移动一列
            col--;
        } else {
            // 当前值小于目标值，向下移动一行
            row++;
        }
    }
    
    // 遍历完仍未找到目标值
    return false;
};
