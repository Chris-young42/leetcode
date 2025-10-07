/**
 * @param {number} numCourses - 课程总数（编号从 0 到 numCourses-1）
 * @param {number[][]} prerequisites - 先修课程列表，每个元素 [a, b] 表示：
 *                                     想上课程 a，必须先上课程 b
 * @return {boolean} - 是否能上完所有课程（没有环就能上完）
 */
var canFinish = function(numCourses, prerequisites) {

    // 1️⃣ 构建图（邻接表）
    // g[i] 表示：课程 i 的后续课程有哪些（从 i 可以到的节点）
    const g = Array.from({ length: numCourses }, () => []);

    // 遍历所有先修关系，建立有向边 b -> a
    for (const [a, b] of prerequisites) {
        g[b].push(a);
    }

    // 2️⃣ colors 数组标记访问状态（经典 DFS 染色法）
    // 0：未访问
    // 1：正在访问中（递归栈中）
    // 2：访问完毕（安全节点）
    const colors = Array(numCourses).fill(0);

    /**
     * DFS 深度优先搜索：判断从节点 x 出发是否能找到环
     * 返回 true 表示发现了环（不能完成课程）
     */
    function dfs(x) {
        colors[x] = 1; // 标记为正在访问中（进入递归栈）

        // 遍历课程 x 的所有后续课程 y
        for (const y of g[x]) {
            // 如果 y 正在访问中 -> 出现回到递归栈的情况，说明有环
            if (colors[y] === 1) {
                return true; // 找到环
            }

            // 如果 y 未访问过（colors[y] === 0），继续 DFS
            // 如果递归 dfs(y) 返回 true，说明子路径中有环
            if (colors[y] === 0 && dfs(y)) {
                return true; // 找到环
            }
        }

        // 到这里说明从 x 出发的路径没有环
        colors[x] = 2; // 标记为访问完毕（安全节点）
        return false; // 没找到环
    }

    // 3️⃣ 遍历所有课程，防止图不连通（可能有多个独立部分）
    for (let i = 0; i < numCourses; i++) {
        // 如果该课程还没访问过，并且从它出发能找到环
        if (colors[i] === 0 && dfs(i)) {
            return false; // 有环，无法完成所有课程
        }
    }

    // 没有环 -> 可以完成所有课程
    return true;
};
