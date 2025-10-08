/**
 * @param {number[]} nums - 输入的数字数组
 * @return {number[][]} - 返回所有可能的子集（即幂集）
 */
var subsets = function(nums) {
    const n = nums.length;  // 数组长度
    const ans = [];         // 用来保存所有子集的结果
    const path = [];        // 当前正在构造的子集（路径）

    /**
     * dfs(i): 表示当前正在处理 nums[i] 这个位置的决策
     * - 参数 i 表示当前决策到第几个元素
     * - path 保存当前选择的数字组合
     */
    function dfs(i) {
        // ✅ 递归终止条件：当 i 走到数组末尾（超出范围）
        if (i === n) {
            // 此时 path 里存的就是一个完整子集
            // slice() 是为了复制数组（避免后续修改影响结果）
            ans.push(path.slice());
            return;
        }
        
        
        // ✅ 决策1：不选 nums[i]
        // 跳过当前数字，直接处理下一个
        dfs(i + 1);
        
        // ✅ 决策2：选 nums[i]
        // 先把当前数字放进 path
        path.push(nums[i]);

        // 继续递归，处理下一个数字
        dfs(i + 1);

        // 回溯：撤销刚才的选择（恢复现场）
        // 这样才能正确尝试“别的选择”
        path.pop();
    }

    // 从下标0开始做决策
    dfs(0);

    // 返回所有子集
    return ans;
};
