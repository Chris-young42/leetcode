/**
 * @param {character[][]} board - 字符网格（二维数组）
 * @param {string} word - 要搜索的目标单词
 * @return {boolean} - 返回是否能在网格中找到该单词
 */
var exist = function(board, word) {
    const m = board.length;       // 行数
    const n = board[0].length;    // 列数

    /**
     * 深度优先搜索 DFS
     * @param {number} i - 当前所在的行
     * @param {number} j - 当前所在的列
     * @param {number} k - 当前匹配到单词的第几个字符
     * @return {boolean} - 是否能从这里往下匹配成功
     */
    function dfs(i, j, k) {
        // ❌ 1. 当前格子的字母和目标单词对应位置的字母不一致
        if (board[i][j] !== word[k]) {
            return false; // 匹配失败
        }

        // ✅ 2. 如果 k 已经到了最后一个字符，并且也匹配成功，说明整串单词找到了
        if (k + 1 === word.length) {
            return true;
        }

        // 🚫 3. 标记这个格子已经访问过
        // 因为题目不允许一个格子在一次搜索中被重复使用
        const temp = board[i][j]; 
        board[i][j] = 0;  // 任意非字母值都行，这里用 0

        // ⬅️ ➡️ ⬆️ ⬇️ 四个方向探索相邻格子
        for (const [x, y] of [[i, j - 1], [i, j + 1], [i - 1, j], [i + 1, j]]) {
            // 判断边界，防止越界
            if (0 <= x && x < m && 0 <= y && y < n) {
                // 递归搜索下一个字符
                if (dfs(x, y, k + 1)) {
                    return true; // 如果在某个方向找到了，就直接返回 true
                }
            }
        }

        // 🧹 4. 恢复现场（回溯）
        // 这个格子留给后面其他路径使用
        board[i][j] = temp;

        // ❌ 5. 四个方向都没找到，返回 false
        return false;
    }

    // 🏁 从网格中的每一个起点出发，尝试匹配单词
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {   // 从 (i, j) 开始匹配 word[0]
                return true;     // 只要有一条路径成功，就返回 true
            }
        }
    }

    // ❌ 整个网格都找不到，返回 false
    return false;
};
