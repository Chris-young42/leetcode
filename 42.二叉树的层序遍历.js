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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // 处理空树情况
    if (!root) {
        return [];
    }
    
    // 存储结果的二维数组
    const result = [];
    // 队列用于BFS，初始加入根节点
    const queue = [root];
    
    // 当队列不为空时继续遍历
    while (queue.length > 0) {
        // 当前层的节点数量
        const levelSize = queue.length;
        // 存储当前层的节点值
        const currentLevel = [];
        
        // 遍历当前层的所有节点
        for (let i = 0; i < levelSize; i++) {
            // 出队一个节点
            const node = queue.shift();
            // 将节点值加入当前层数组
            currentLevel.push(node.val);
            
            // 如果有左子节点，入队
            if (node.left) {
                queue.push(node.left);
            }
            // 如果有右子节点，入队
            if (node.right) {
                queue.push(node.right);
            }
        }
        
        // 将当前层的节点值数组加入结果
        result.push(currentLevel);
    }
    
    return result;
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const res = []
  function traversal (root, depth) {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = []
      }
      traversal(root.left, depth + 1)
      res[depth].push(root.val)
      traversal(root.right, depth + 1)
    }
  }
  traversal(root, 0);
  return res;
};