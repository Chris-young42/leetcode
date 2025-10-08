/**
 * @param {number} n - 括号对数，比如 n = 3 就表示 3 对括号
 * @return {string[]} - 返回所有合法的括号组合
 */
var generateParenthesis = function (n) {
  const ans = [];                // 用来保存所有合法的括号组合
  const path = Array(n * 2);     // 用数组保存当前构造的括号序列（长度固定 2n）

  /**
   * 深度优先搜索
   * @param {number} left - 当前已经使用了多少个左括号 "("
   * @param {number} right - 当前已经使用了多少个右括号 ")"
   */
  function dfs(left, right) {
    // ✅ 递归终止条件：
    // 当右括号数量等于 n 时，说明左括号和右括号都已经用完
    // 当前 path 就是一种合法的括号组合
    if (right === n) {
      ans.push(path.join(""));   // 把数组拼成字符串加入结果集
      return;
    }

    // 👉 情况 1：还能放左括号
    // 只要左括号还没用满，就可以继续放一个左括号
    if (left < n) {
      path[left + right] = "(";  // 在当前位置放一个 "("
      dfs(left + 1, right);      // 左括号数量 +1，继续递归
    }

    // 👉 情况 2：放右括号
    // 放右括号的前提是已经放的左括号数量要比右括号多
    // 否则就会出现不合法的情况，比如 ")("
    if (right < left) {
      path[left + right] = ")";  // 在当前位置放一个 ")"
      dfs(left, right + 1);      // 右括号数量 +1，继续递归
    }
  }

  // 从 0 左括号、0 右括号开始递归
  dfs(0, 0);
  return ans;
};
