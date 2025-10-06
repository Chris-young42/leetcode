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
/**
 * @param {TreeNode} root
 * @return {void} 不返回值，直接修改 root
 */
var flatten = function (root) {
  if (!root) return;  // 递归终止条件：空节点直接返回

  // 先递归展开左子树和右子树
  flatten(root.left);
  flatten(root.right);

  // 暂存当前节点原本的右子树
  const tempRight = root.right;

  // 把左子树接到右边
  root.right = root.left;
  root.left = null; // 左指针清空，避免成环

  // 找到新的右子链表的“末尾”
  let current = root;
  while (current.right) {
    current = current.right;
  }

  // 把原来的右子树接到末尾
  current.right = tempRight;
};
  
/**
 * @param {TreeNode} root
 * @return {void}
 */
var flatten = function (root) {
    let head = null; // 记录当前“已经展开”的链表头节点（最右边）

    function dfs(node) {
        if (node === null) return; // 递归终止：空节点返回

        // 注意：先遍历右子树，再遍历左子树
        dfs(node.right);
        dfs(node.left);

        // 把当前节点的左右指针调整为链表形式
        node.left = null;   // 左指针必须清空
        node.right = head;  // 当前节点的右指针指向“已展开部分”

        // 更新 head，表示“链表头”向前推进
        head = node;
    }

    dfs(root);
};