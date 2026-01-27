/**
 * @param {number[]} candidates - 可选数字的数组（每个数字可以重复使用）
 * @param {number} target - 目标和
 * @return {number[][]} - 所有可以组合出目标和的组合
 */
var combinationSum = function (candidates, target) {
  const ans = []; // 存储所有满足条件的组合结果

  /**
   * dfs(target, combine, idx)
   * @param {number} target - 剩余的目标和
   * @param {number[]} combine - 当前选择的数字组合
   * @param {number} idx - 当前递归处理到的候选数字下标
   */
  const dfs = (target, combine, idx) => {
    // ✅ 递归终止条件 1：如果已经考察到数组的最后一个数以后
    if (idx === candidates.length) {
      return; // 没有更多数字可以选择，直接结束
    }

    // ✅ 递归终止条件 2：如果剩余目标为 0，说明当前组合符合要求
    if (target === 0) {
      ans.push(combine); // 注意这里 combine 已经是一个新数组
      return;
    }

    // 🚫 1. 不选择当前 candidates[idx]，直接考察下一个数字
    dfs(target, combine, idx + 1);

    // ✅ 2. 选择当前 candidates[idx]
    // 注意：题目允许同一个数字重复使用，所以 idx 不变
    if (target - candidates[idx] >= 0) {
      dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
    }
  };

  // 从第 0 个候选数字开始递归
  dfs(target, [], 0);
  return ans;
};
/**
 * @param {number[]} candidates - 候选数字数组
 * @param {number} target - 目标和
 * @return {number[][]} - 所有符合条件的组合
 */
function combinationSum(candidates, target) {
    // 1. 所有核心变量都定义在外部（回溯函数外）
    const result = []; // 最终结果数组
    const sortedCandidates = [...candidates].sort((a, b) => a - b); // 排序后的候选数组
    const aim = target; // 目标值
    const path = []; // 重点：把当前组合path也提取到外部定义（替代调用时的[]）

    // 2. 回溯函数：仅依赖外部变量，参数进一步简化（甚至可以无参，这里保留start/sum更清晰）
    const backtrack = (start, sum) => {
        // 终止条件1：和等于目标值，保存组合
        if (sum === aim) {
            result.push([...path]); // 仍需拷贝，避免后续修改影响结果
            return;
        }
        // 终止条件2：和超过目标值，剪枝返回
        if (sum > aim) {
            return;
        }

        // 遍历候选数组
        for (let i = start; i < sortedCandidates.length; i++) {
            const num = sortedCandidates[i];
            // 剪枝：当前数字大于剩余需要的和，直接终止循环
            if (num > aim - sum) break;

            // 选择：向外部的path中添加当前数字
            path.push(num);
            // 递归：仅传递start和sum（path用外部的）
            backtrack(i, sum + num);
            // 回溯：从外部的path中移除最后一个数字
            path.pop();
        }
    };

    // 3. 调用回溯函数：仅传start和sum，path用外部定义的空数组
    backtrack(0, 0);
    return result;
}                                     