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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // 边界条件：空树直接返回
    if (root === null) return null;
    
    // 队列存储待处理的节点
    const queue = [root];
    
    while (queue.length > 0) {
        // 取出队首节点（按层处理）
        const node = queue.shift();
        // 交换当前节点的左右子节点（核心操作）
        [node.left, node.right] = [node.right, node.left];
        // 左子节点存在则入队，后续处理
        if (node.left) queue.push(node.left);
        // 右子节点存在则入队，后续处理
        if (node.right) queue.push(node.right);
    }
    
    return root;
};