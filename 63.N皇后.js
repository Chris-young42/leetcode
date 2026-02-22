/**
 * N 皇后问题：
 * 在 n×n 的棋盘上放置 n 个皇后，使得她们彼此不攻击。
 * 皇后攻击方式：同行、同列、同主对角线、副对角线。
 * 题目要求返回所有合法的放置方案，每个方案用字符串数组表示棋盘。
 *
 * @param {number} n - 棋盘的大小，也是皇后的数量
 * @return {string[][]} - 所有解的集合
 */
var solveNQueens = function (n) {
  // 存放所有符合条件的解
  const ans = [];

  // queens[i] = j 表示：第 i 行的皇后放在第 j 列
  const queens = Array(n).fill(0);

  // col[j] 表示列 j 是否已经有皇后
  const col = Array(n).fill(false);

  // diag1[k] 表示主对角线是否有皇后（主对角线方向 ↘）
  // 主对角线索引规律：r + c（行列之和相等的点在同一主对角线上）
  const diag1 = Array(n * 2 - 1).fill(false);

  // diag2[k] 表示副对角线是否有皇后（副对角线方向 ↙）
  // 副对角线索引规律：r - c + (n - 1)
  // 因为 r - c 可能为负数，所以加 (n - 1) 做偏移
  const diag2 = Array(n * 2 - 1).fill(false);

  /**
   * 深度优先搜索 + 回溯
   * @param {number} r - 当前正在处理的行号
   */
  function dfs(r) {
    // ✅ 递归终止条件：已经成功放置了 n 行皇后
    if (r === n) {
      // 将 queens 数组转为棋盘表示
      // 例如 queens = [1, 3, 0, 2] 转换为：
      // [".Q..", "...Q", "Q...", "..Q."]
      const board = queens.map(
        (c) => ".".repeat(c) + "Q" + ".".repeat(n - 1 - c)
      );
      ans.push(board);
      return;
    }

    // 🧭 遍历当前行的每一列，尝试放皇后
    for (let c = 0; c < n; c++) {
      // 副对角线的索引
      const rc = r - c + n - 1;

      // ⚔️ 检查当前位置是否冲突              
      // 1. 该列不能有皇后
      // 2. 主对角线不能有皇后
      // 3. 副对角线不能有皇后
      if (!col[c] && !diag1[r + c] && !diag2[rc]) {
        // ✅ 可以放置皇后

        // 记录皇后的位置
        queens[r] = c;

        // 🚩 标记当前列和两条对角线
        col[c] = true;
        diag1[r + c] = true;
        diag2[rc] = true;

        // 递归处理下一行
        dfs(r + 1);

        // 🌀 回溯：撤销标记，尝试其他列
        col[c] = false;
        diag1[r + c] = false;
        diag2[rc] = false;
      }
    }
  }

  // 从第 0 行开始放置皇后
  dfs(0);

  // 返回所有可行的解
  return ans;
};
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
	const ans = [];
	const path = [];
	const matrix = new Array(n).fill(0).map(() => new Array(n).fill("."));
	// 判断是否能相互攻击
	const canAttack = (matrix, row, col) => {
		let i;
		let j;
		// 判断正上方和正下方是否有皇后
		for (i = 0, j = col; i < n; i++) {
			if (matrix[i][j] === "Q") {
				return true;
			}
		}
		// 判断正左边和正右边是否有皇后
		for (i = row, j = 0; j < n; j++) {
			if (matrix[i][j] === "Q") {
				return true;
			}
		}
		// 判断左上方是否有皇后
		for (i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
			if (matrix[i][j] === "Q") {
				return true;
			}
		}
         // 判断右上方是否有皇后
		for (i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
			if (matrix[i][j] === "Q") {
				return true;
			}
		}
		return false;
	};
	const backtrack = (matrix, row, col) => {
		if (path.length === matrix.length) {
			ans.push(path.slice());
			return;
		}
		for (let i = row; i < matrix.length; i++) {
			for (let j = col; j < matrix.length; j++) {
				// 当前位置会导致互相攻击 继续下一轮搜索
				if (canAttack(matrix, i, j)) {
					continue;
				}
				matrix[i][j] = "Q";
				path.push(matrix[i].join(""));
				// 另起一行搜索 同一行只能有一个皇后
				backtrack(matrix, i + 1, 0);
				matrix[i][j] = ".";
				path.pop();
			}
		}
	};
	backtrack(matrix, 0, 0);
	return ans;
};