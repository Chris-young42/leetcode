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
var isValidBST = function(root) {
    // 辅助函数，递归检查每个节点是否在合法范围内
    const helper = (node, lower, upper) => {
        // 空节点是有效的BST
        if (node === null) return true;
        
        const val = node.val;
        // 检查当前节点值是否超出范围
        if (val <= lower || val >= upper) return false;
        
        // 递归检查右子树（下界更新为当前节点值）
        if (!helper(node.right, val, upper)) return false;
        // 递归检查左子树（上界更新为当前节点值）
        if (!helper(node.left, lower, val)) return false;
        
        // 所有检查通过
        return true;
    };
    
    // 初始范围设为负无穷到正无穷
    return helper(root, -Infinity, Infinity);
};