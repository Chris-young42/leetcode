/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  //构造矩阵
  //好橘子的数量
  let fresh = 0;
  //声明了一个bfs队列
  let q = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        fresh++;
        //统计新鲜的橘子数量
      } else if (grid[i][j] === 2) {
        q.push([i, j]);
        //推入队列
      }
    }
  }
  
  let ans = 0;
  //开始计数
  while (fresh && q.length) {
    ans++;
    const tmp = q;
    q = [];
    //每次拿到最新的q来计数
    for (const [x, y] of tmp) {
      for (const [i, j] of [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ]) {
        if (0 <= i && i < m && 0 <= j && j < n && grid[i][j] === 1) {
          fresh--;
          grid[i][j] = 2;
          q.push([i, j]);
        }
      }
    }
  }
  return fresh ? -1 : ans;
};
