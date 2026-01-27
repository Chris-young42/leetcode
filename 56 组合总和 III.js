/**
 * @param {number} k 组合中数字的个数
 * @param {number} n 组合的目标和
 * @return {number[][]} 所有符合条件的组合
 */
var combinationSum3 = function(k, n) {
    const result = []; // 最终结果数组
    const current = []; // 放到外部的当前组合数组，不再作为参数传递
    
    // 回溯函数：仅保留必要的sum和start参数
    const backtrack = (sum, start) => {
        // 终止条件：当前组合长度等于k
        if (current.length === k) {
            if (sum === n) {
                result.push([...current]); // 浅拷贝存入结果，避免后续修改影响
            }
            return;
        }
        
        // 遍历可选数字，从start到9
        for (let i = start; i <= 9; i++) {
            // 剪枝：和超过n则无需继续
            if (sum + i > n) {
                break;
            }
            // 选择当前数字i
            current.push(i);
            // 递归：仅传递更新后的sum和下一个起始值i+1
            backtrack(sum + i, i + 1);
            // 回溯：撤销选择
            current.pop();
        }
    };
    
    // 初始调用：初始和为0，从1开始选
    backtrack(0, 1);
    return result;
};