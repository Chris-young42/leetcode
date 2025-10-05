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
var diameterOfBinaryTree = function(root) {
    // 用于存储最大直径的变量
    let maxDiameter = 0;
    
    // 辅助函数：计算以当前节点为根的树的深度，同时更新最大直径
    const calculateDepth = (node) => {
        // 空节点深度为0
        if (!node) return 0;
        
        // 递归计算左右子树深度
        const leftDepth = calculateDepth(node.left);
        const rightDepth = calculateDepth(node.right);
        
        // 更新最大直径：经过当前节点的最长路径是左子树深度+右子树深度
        maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);
        
        // 返回当前节点的深度（左右子树最大深度+1）
        return 1 + Math.max(leftDepth, rightDepth);
    };
    
    // 从根节点开始计算
    calculateDepth(root);
    
    // 返回最大直径
    return maxDiameter;
};