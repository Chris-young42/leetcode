/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
  let ans = -Infinity;
  function dfs(node) {
    if (node === null) {
      return 0;
    }
    const lval = dfs(node.left);
    const rval = dfs(node.right);
    ans = Math.max(ans, lval + rval + node.val);
    return Math.max(Math.max(lval + rval) + node.val, 0);
  }
  dfs(root);
  return ans;
};
