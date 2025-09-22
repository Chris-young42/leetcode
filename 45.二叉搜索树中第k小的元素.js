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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  const stack = [];
  //设计一个栈结构
  while (root != null || stack.length) {
    while (root != null) {
      //先遍历左子树，左子树小，所以当k小于中间值的时候，只需要从左子树取值
      stack.push(root);
      root = root.left;
    }
    //root赋值为当前倒计时所在的节点
    root = stack.pop();
    k--;
    if (k === 0) {
      break;
    }
    //此时左子树遍历完毕。k未到0，更新到k为0为止
    //得到当前k所在的节点
    root = root.right;
  }
  //返回当前节点的zhi
  return root.val;
};
