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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // 边界情况处理：如果根节点为空，返回空数组
    if (!root) return [];
    
    // 结果数组
    const result = [];
    // 队列用于BFS，初始放入根节点
    const queue = [root];
    
    // 当队列不为空时继续遍历
    while (queue.length > 0) {
        // 当前层的节点数量
        const levelSize = queue.length;
        
        // 遍历当前层的所有节点
        for (let i = 0; i < levelSize; i++) {
            // 取出队首节点
            const node = queue.shift();
            
            // 如果是当前层的最后一个节点，加入结果数组
            if (i === levelSize - 1) {
                result.push(node.val);
            }
            
            // 将左、右子节点加入队列（如果存在）
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    
    return result;
};