/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    
    // 步骤1: 转置矩阵（行变列，列变行）
    for (let i = 0; i < n; i++) {
        // 注意j从i开始，避免重复交换
        for (let j = i; j < n; j++) {
            // 交换matrix[i][j]和matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // 步骤2: 反转每一行
    for (let i = 0; i < n; i++) {
        // 反转第i行
        matrix[i].reverse();
    }
};