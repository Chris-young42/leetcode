/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder  前序遍历数组
 * @param {number[]} inorder   中序遍历数组
 * @return {TreeNode}          返回重建后的二叉树根节点
 */

var buildTree = function (preorder, inorder) {
    const len = preorder.length
    // 建一个哈希表，用于快速找到某个节点在中序遍历中的位置
    // 例如 inorder = [9,3,15,20,7]
    // 则 obj = { 9:0, 3:1, 15:2, 20:3, 7:4 }
    const obj = {}
    inorder.forEach((n, i) => obj[n] = i)

    /**
     * dfs 递归函数：用于构建一棵子树
     * @param {number} preL 当前子树的前序起始下标
     * @param {number} preR 当前子树的前序结束下标
     * @param {number} inL  当前子树的中序起始下标
     * @param {number} inR  当前子树的中序结束下标
     * @return {TreeNode}   返回当前子树的根节点
     */
    const dfs = (preL, preR, inL, inR) => {
        // 递归结束条件：
        // 当前区间为空，说明没有节点了
        if (preL > preR || inL > inR) return null

        // 前序遍历的第一个节点就是当前子树的根节点
        const root = new TreeNode(preorder[preL])

        // 如果区间只有一个节点，直接返回这个节点
        if (preL === preR) return root

        // 找到根节点在中序序列中的位置
        const index = obj[root.val]

        // 计算左子树的节点数量
        // 中序遍历中，左边那一段属于左子树
        const leftSize = index - inL

        // 递归构建左子树
        // 前序中：根节点后面紧跟的 leftSize 个元素属于左子树
        // 中序中：[inL, index - 1] 这段是左子树
        root.left = dfs(preL + 1, preL + leftSize, inL, index - 1)

        // 递归构建右子树
        // 前序中：[preL + leftSize + 1, preR] 属于右子树
        // 中序中：[index + 1, inR] 属于右子树
        root.right = dfs(preL + leftSize + 1, preR, index + 1, inR)

        // 返回当前子树的根节点
        return root
    }

    // 从整个数组范围开始构建整棵树
    return dfs(0, len - 1, 0, len - 1)
}