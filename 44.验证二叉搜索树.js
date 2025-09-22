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
 * @return {boolean}
 */
var isValidBST = function (root) {
  const helper = (node, lower, upper) => {
    if (node === null) return true;

    const val = node.val;
    if (val <= lower || val >= upper) return false;
    if (!helper(node.right, val, upper)) return false;
    if (!helper(node.left, lower, val)) return false;
    return true;
  };
  return helper(root, -Infinity, Infinity);
};
