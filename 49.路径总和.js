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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root == null) return 0;
  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
};

const rootSum = () => {
  let ret = 0;
  if (root == null) {
    return 0;
  }
  const val = root.val;
  if (val === targetSum) {
    ret++;
  }
  ret += rootSum(root.left, targetSum - val);
  ret += rootSum(root.right, targetSum - val);
  return ret;
};
