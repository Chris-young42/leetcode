/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  //创建numcources长度的数组
  const g = Array.from({ length: numCourses }, () => []);
  //创建依赖图,b为所需学习，a为依赖课程
  for (const [a, b] of prerequisites) {
    g[b].push(a);
  }

  const colors = Array(numCourses).fill(0);
  function dfs(x) {
    // 标记环算法
    colors[x] = 1;
    for (const y of g[x]) {
      if (colors[y] === 1 || (colors[y] === 0 && dfs(y))) {
        return true;
      }
    }
    colors[x] = 2;
    return false;
  }
  // 统一处理环
  for (let i = 0; i < numCourses; i++) {
    if (colors[i] === 0 && dfs(i)) {
      return false;
    }
  }
  return true;
};
