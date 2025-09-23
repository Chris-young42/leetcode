/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    //如果没有图，或者图为0，就0个岛屿
  if (!grid || grid.length === 0) {
    return 0;
  }
  let count = 0;
  const rows = grid.length;
  const cols = gird[0].length;
  const dfs = (i, j) => {
    //处理边界情况
    if (i < 0 || i >= rows || j < 0 || i >= cols || gird[i][j] !== "1") {
      return;
    }
    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
       // 通过调用次数决定岛屿的数量次数
        count++;
        dfs(i, j);
      }
    }
  }
  return count;
};
