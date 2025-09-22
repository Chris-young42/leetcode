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
var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  const calculateDepth = (node) => {
    if (!node) return 0;
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
    return 1 + Math.max(leftDepth, rightDepth);
  };

  calculateDepth(root);
  return maxDiameter;
};
