/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const rows = matrix.length;
    if (rows === 0) return;
    const cols = matrix[0].length;
    
    // 标记第一行和第一列是否原本就有0
    let firstRowHasZero = false;
    let firstColHasZero = false;
    
    // 检查第一行是否有0
    for (let j = 0; j < cols; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }
    
    // 检查第一列是否有0
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }
    
    // 用第一行和第一列作为标记位，记录其他行列是否需要置零
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][j] === 0) {
                // 标记当前行需要置零（用第一列的对应位置）
                matrix[i][0] = 0;
                // 标记当前列需要置零（用第一行的对应位置）
                matrix[0][j] = 0;
            }
        }
    }
    
    // 根据标记，将除第一行和第一列外的元素置零
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // 处理第一行（如果原本有0，整行置零）
    if (firstRowHasZero) {
        for (let j = 0; j < cols; j++) {
            matrix[0][j] = 0;
        }
    }
    
    // 处理第一列（如果原本有0，整列置零）
    if (firstColHasZero) {
        for (let i = 0; i < rows; i++) {
            matrix[i][0] = 0;
        }
    }
};