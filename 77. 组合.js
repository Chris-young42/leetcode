/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = []; // 最终结果集
    const path = [];   // 单次组合的路径

    // 回溯函数：start 表示当前开始选择的数字（避免重复组合）
    const backtrack = (start) => {
        // 终止条件：路径长度等于k，收集结果
        if (path.length === k) {
            result.push([...path]); // 深拷贝，避免后续修改影响结果
            return;
        }

        // 穷举：从start到n的所有数字
        for (let i = start; i <= n; i++) {
            path.push(i);          // 选择当前数字
            backtrack(i + 1);      // 递归：下一轮从i+1开始（避免重复）
            path.pop();            // 回溯：撤销选择
        }
    };

    backtrack(1); // 从数字1开始
    return result;
};