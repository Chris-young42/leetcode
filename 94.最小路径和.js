/**
 * 计算从左上角到右下角的最小路径和
 * @param {number[][]} grid - m x n 的网格，每个格子存放一个非负整数
 * @return {number} - 最小路径和
 */
var minPathSum = function (grid) {
  const m = grid.length;      // 网格的行数
  const n = grid[0].length;   // 网格的列数

  /**
   * 第一行初始化：
   * 在第一行上，机器人只能一直向 **右** 移动。
   * 因此到达 (0, j) 的最小路径和 = 当前格子值 + 左边格子的最小路径和。
   *
   * 举例：
   * grid[0][j] = grid[0][j] + grid[0][j-1]
   *
   * 例如初始值为 [1,3,1] → 处理后变成 [1,4,5]
   */
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }

  /**
   * 第一列初始化：
   * 在第一列上，机器人只能一直向 **下** 移动。
   * 因此到达 (i, 0) 的最小路径和 = 当前格子值 + 上边格子的最小路径和。
   *
   * 举例：
   * grid[i][0] = grid[i][0] + grid[i-1][0]
   */
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  /**
   * 处理除第一行和第一列之外的其他格子
   *
   * 对于每一个格子 grid[i][j]，机器人只能从 **上方 (i-1, j)** 或 **左方 (i, j-1)** 过来，
   * 所以到达当前格子的最小路径和 = 当前值 + min(上方路径和, 左方路径和)。
   *
   * 即：
   * grid[i][j] = grid[i][j] + Math.min(grid[i-1][j], grid[i][j-1])
   */
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  /**
   * 最终答案就在右下角 (m-1, n-1)
   */
  return grid[m - 1][n - 1];
};
