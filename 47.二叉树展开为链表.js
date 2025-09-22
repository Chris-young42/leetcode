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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) return;
  flatten(root.left); 
  flatten(root.right);
  const tempRight = root.right;
  root.right = root.left;
  root.left = null;
  let current = root;
  while (current.right) {
    current = current.right;
  }
  current.right = tempRight;
};

  
var flatten = function(root) {
    let head = null;
    function dfs(node) {
        if (node === null) {
            return;
        }
        dfs(node.right);
        dfs(node.left);
        node.left = null;
        node.right = head;
        head = node;
    }
    dfs(root);
};
