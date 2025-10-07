/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // 获取行数 m 和列数 n
    const m = grid.length, n = grid[0].length;
    
    let fresh = 0; // 记录新鲜橘子的数量
    let q = [];    // 队列，用来存放当前已经腐烂的橘子的坐标

    // 第一步：遍历整个网格，统计新鲜橘子数量，并把腐烂橘子放进队列
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                // 遇到新鲜橘子，计数 +1
                fresh++;
            } else if (grid[i][j] === 2) {
                // 遇到腐烂橘子，放入队列（起始点）
                q.push([i, j]);
            }
        }
    }

    let ans = 0; // 记录时间（分钟）

    // 第二步：开始 BFS（层序遍历）模拟腐烂传播
    // 当还有新鲜橘子(fresh>0)，并且当前队列中还有腐烂橘子时，就继续传播
    while (fresh && q.length) {
        ans++; // 每一轮代表 1 分钟过去
        const tmp = q; // 当前这一分钟所有已经腐烂的橘子
        q = []; // 用来存放下一分钟会腐烂的橘子

        // 遍历当前腐烂的橘子们
        for (const [x, y] of tmp) {
            // 分别向四个方向扩散：上、下、左、右
            for (const [i, j] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) {
                // 判断边界 + 是否是新鲜橘子
                if (0 <= i && i < m && 0 <= j && j < n && grid[i][j] === 1) {
                    // 如果是新鲜橘子，被腐烂影响
                    fresh--;          // 新鲜橘子数量减1
                    grid[i][j] = 2;   // 变为腐烂状态
                    q.push([i, j]);   // 这一橘子将参与下一轮传播
                }
            }
        }
    }

    // 第三步：判断是否还有新鲜橘子残留
    // 如果还有新鲜橘子，说明有部分无法被腐烂 -> 返回 -1
    // 否则返回传播所需的分钟数
    return fresh ? -1 : ans;
};
