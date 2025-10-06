var maxPathSum = function (root) {
  let ans = -Infinity; // 全局变量，记录最大路径和

  function dfs(node) {
    if (node === null) {
      return 0; // 空节点对路径和的贡献为0
    }

    // 计算左右子树的“最大单边路径和”
    // 如果子树路径和是负数，直接舍弃（不如不走）
    const lval = Math.max(dfs(node.left), 0);
    const rval = Math.max(dfs(node.right), 0);

    // 以当前节点为“最高点”的路径和
    // 左 + 右 + 当前节点
    ans = Math.max(ans, lval + rval + node.val);

    // 返回“单边最大路径和”
    // 因为在父节点眼里，只能选择一边（左或右）
    return Math.max(lval, rval) + node.val;
  }

  dfs(root);
  return ans;
};
