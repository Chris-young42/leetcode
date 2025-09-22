/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
  const len = preorder.length;
  const obj = {};
  inorder.forEach((n, i) => (obj[n] = i));

  const dfs = (preL, preR, inL, inR) => {
    if (preL > preR || inL > inR) return null;
    const root = new TreeNode(preorder[preL]);
    if (preL === preR) return root;
    const index = obj[root.val]; // 根节点
    const leftSize = index - inL;
    root.left = dfs(preL + 1, preL + leftSize, inL, index - 1);
    root.right = dfs(preL + leftSize + 1, preR, index + 1, inR);
    return root;
  };
  return dfs(0, len - 1, 0, len - 1);
};
