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
