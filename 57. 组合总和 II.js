/**
 * 组合总和 II 回溯解法
 * @param {number[]} candidates - 候选数组（含重复元素）
 * @param {number} target - 目标和
 * @returns {number[][]} - 所有不重复的组合
 */
function combinationSum2(candidates, target) {
    const result = []; // 存储最终结果集
    const path = [];   // 存储当前回溯路径（单次组合）
    // 关键1：先排序，让重复元素相邻，为后续同层去重做准备
    candidates.sort((a, b) => a - b);

    /**
     * 回溯递归函数
     * @param {number} start - 递归起始索引（控制元素不重复使用）
     * @param {number} currentSum - 当前路径的和
     */
    function backtrack(start, currentSum) {
        // 终止条件1：当前和等于目标和，找到有效组合
        if (currentSum === target) {
            result.push([...path]); // 深拷贝路径，避免后续修改影响结果
            return;
        }
        // 终止条件2：当前和超过目标和，剪枝（无需继续递归）
        if (currentSum > target) {
            return;
        }

        // 遍历候选数组，从start开始（保证元素不重复使用）
        for (let i = start; i < candidates.length; i++) {
            // 关键2：同层去重，跳过重复元素（i > start 保证是同层，非同一树枝）
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            // 选择：将当前元素加入路径，更新当前和
            path.push(candidates[i]);
            // 递归：起始索引+1（当前元素已用，后续不能再用），当前和累加
            backtrack(i + 1, currentSum + candidates[i]);
            // 回溯：撤销选择，移除最后一个元素，恢复当前和
            path.pop();
        }
    }

    // 初始调用：从索引0开始，当前和为0
    backtrack(0, 0);
    return result;
}