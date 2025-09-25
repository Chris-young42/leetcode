/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const ans = [];
  const queens = Array(n).fill(0);
  const col = Array(n).fill(false);
  const diag1 = Array(n * 2 - 1).fill(false);
  const diag2 = Array(n * 2 - 1).fill(false);
  function dfs(r) {
    // 递归终止条件：已经处理完所有行
    if (r === n) {
      // 将当前解转换为要求的格式并添加到结果中
      ans.push(queens.map((c) => ".".repeat(c) + "Q" + ".".repeat(n - 1 - c)));
      return;
    }

    // 尝试在当前行的每一列放置皇后
    for (let c = 0; c < n; c++) {
      // 计算副对角线的索引~
      const rc = r - c + n - 1;

      // 检查当前位置是否可以放置皇后
      // 需满足：不在同一列、不在同一主对角线、不在同一副对角线
      if (!col[c] && !diag1[r + c] && !diag2[rc]) {
        // 放置皇后
        queens[r] = c;

        // 标记当前列和对角线已被占用
        col[c] = diag1[r + c] = diag2[rc] = true;

        // 递归处理下一行
        dfs(r + 1);

        // 回溯：撤销标记，尝试其他位置
        col[c] = diag1[r + c] = diag2[rc] = false;
      }
    }
  }
  dfs(0);
  return ans;
};
