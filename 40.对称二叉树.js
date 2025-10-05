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
var isSymmetric = function (root) {
  const isMirror = (left, right) => {
   if (!left && !right) return true
if (!left || !right) return false
    return (
      left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    );
  };
  return !root || isMirror(root.left, root.right);
}; 

// 方法2: 迭代实现（使用队列）
var isSymmetric = function(root) {
    if (!root) return true;
    
    // 使用队列存储成对的节点
    const queue = [root.left, root.right];
    
    while (queue.length > 0) {
        // 取出一对节点
        const left = queue.shift();
        const right = queue.shift();
        
        // 两个都为空，继续检查其他节点
        if (!left && !right) continue;
        // 一个为空一个不为空，不对称
        if (!left || !right) return false;
        // 值不相等，不对称
        if (left.val !== right.val) return false;
        
        // 将需要对称检查的节点成对加入队列
        queue.push(left.left, right.right);  // 左节点的左子树与右节点的右子树
        queue.push(left.right, right.left);  // 左节点的右子树与右节点的左子树
    }
    
    // 所有节点检查完毕，对称
    return true;
};