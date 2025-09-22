/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const g = Array.from({ length: numCourses }, () => []);
  for (const [a, b] of prerequisites) {
    g[b].push(a);
  }
  const colors = Array(numCourses).fill(0);
  function dfs(x) {
    colors[x] = 1;
    for (const y of g[x]) {
      if (colors[y] === 1 || (colors[y] === 0 && dfs(y))) {
        return true;
      }
    }
  }
};
