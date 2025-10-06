/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // 递归终止条件
  if (!root || root === p || root === q) return root;

  // 分别在左右子树中找 p 和 q
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);

  // 情况1：如果左右子树都找到了目标节点，说明当前节点就是最近公共祖先
  if (left && right) return root;

  // 情况2：只有左子树找到了，则公共祖先在左边
  if (left) return left;

  // 情况3：只有右子树找到了，则公共祖先在右边
  if (right) return right;

  // 都没找到
  return null;
};

var lowestCommonAncestor = function (root, p, q) {
  let ans; // 最后要返回的公共祖先

  const dfs = (root, p, q) => {
    if (root === null) return false;

    // 左右子树是否存在 p 或 q
    const lson = dfs(root.left, p, q);
    const rson = dfs(root.right, p, q);

    // 如果 (左子树和右子树各找到一个)
    // 或者 (当前节点是p/q 且左或右子树也找到另一个)
    // 那么当前节点就是公共祖先
    if (
      (lson && rson) ||
      ((root.val === p.val || root.val === q.val) && (lson || rson))
    ) {
      ans = root;
    }

    // 返回当前子树是否包含 p 或 q
    return lson || rson || root.val === p.val || root.val === q.val;
  };

  dfs(root, p, q);
  return ans;
};
