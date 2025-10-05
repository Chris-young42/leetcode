/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
    // 辅助函数：将子数组转换为BST
    const buildBST = (left, right) => {
        // 当左边界大于右边界时，返回null
        if (left > right) {
            return null;
        }
        
        // 选择中间位置作为根节点（使用Math.floor确保整数索引）
        const mid = Math.floor((left + right) / 2);
        
        // 创建当前节点
        const node = new TreeNode(nums[mid]);
        
        // 递归构建左子树（左半部分数组）
        node.left = buildBST(left, mid - 1);
        
        // 递归构建右子树（右半部分数组）
        node.right = buildBST(mid + 1, right);
        
        return node;
    };
    
    // 从整个数组开始构建
    return buildBST(0, nums.length - 1);
};
