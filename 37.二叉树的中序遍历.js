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
var inorderTraversal = function (root) {
  const result = [];
  const traverse = (node) => {
    if (!node) return;
    traverse(node.left);
    result.push(node.val);
    traverse(node.right);
  };
  traverse(root);
  return result;
};
var inorderTraversal = function(root) {
    // 存储遍历结果的数组
    const result = [];
    // 用于模拟递归过程的栈
    const stack = [];
    // 当前遍历到的节点（初始为根节点）
    let current = root;
    
    // 循环条件：当前节点存在 或 栈不为空（还有未处理的节点）
    while (current || stack.length > 0) {
        // 第一步：将当前节点的所有左子节点依次入栈
        // 直到当前节点为空（到达最左侧节点）
        while (current) {
            stack.push(current);  // 节点入栈
            current = current.left;  // 移动到左子节点
        }
        
        // 第二步：弹出栈顶节点（此时是最左侧未处理的节点）
        current = stack.pop();
        
        // 第三步：访问该节点的值（中序遍历的"根"节点处理）
        result.push(current.val);
        
        // 第四步：转向该节点的右子树
        current = current.right;
    }
    
    // 返回最终的遍历结果
    return result;
};