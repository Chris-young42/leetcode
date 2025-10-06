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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root == null) return 0; // 如果节点为空，没有路径
  let ret = rootSum(root, targetSum); // 统计“从当前root出发”的路径数量
  ret += pathSum(root.left, targetSum);  // 再统计“从左子树出发”的路径数量
  ret += pathSum(root.right, targetSum); // 再统计“从右子树出发”的路径数量
  return ret; // 三部分总和就是答案
};

// 统计从“某个节点root开始”，往下的路径中，和等于 targetSum 的数量
const rootSum = (root, targetSum) => {
  let ret = 0;
  if (root == null) return 0; // 空节点直接返回0条路径

  const val = root.val; // 当前节点值

  if (val === targetSum) { // 如果当前节点值刚好等于targetSum
    ret++; // 找到一条合法路径
  }

  // 向左子树继续查找，新的targetSum = 剩余需要的值
  ret += rootSum(root.left, targetSum - val);
  // 向右子树继续查找
  ret += rootSum(root.right, targetSum - val);

  return ret;
};


var pathSum = function(root, targetSum) {
  // 用于记录“前缀和出现的次数”
  // 前缀和指：从根节点到当前节点路径上的所有节点之和
  let map = new Map();
  map.set(0, 1); // 初始状态：前缀和为0出现1次（表示从根开始）

  function getSum(node, sum) {
    if (!node) return 0; // 空节点返回0条路径

    sum += node.val; // 当前路径和 = 到此节点的前缀和

    // result统计以当前节点结尾的“合法路径数”
    // 如果 map 里存在 (sum - targetSum)
    // 说明有一段路径的和正好是 targetSum
    let result = map.get(sum - targetSum) || 0;

    // 把当前前缀和sum加入map，表示这种路径和出现了一次  
    map.set(sum, (map.get(sum) || 0) + 1);

    // 继续递归左右子树
    result += getSum(node.left, sum);
    result += getSum(node.right, sum);

    // ⚠️ 回溯：离开该节点时，撤销当前前缀和记录
    // 防止对其他分支造成干扰
    map.set(sum, map.get(sum) - 1);

    return result;
  }

  return getSum(root, 0); // 从根节点出发，初始前缀和为0
};
