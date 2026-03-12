function treeToArray(
  tree,
  childrenKey = "children",
  removeChildren = true // 是否移除children字段，默认移除
) {
  // 初始化结果数组
  const result = [];

  // 定义递归函数：处理单个节点
  function traverse(node) {
    if (!node) return;

    // 复制节点（避免修改原对象），可选移除children字段
    const nodeCopy = { ...node };
    if (removeChildren) {
      delete nodeCopy[childrenKey];
    }

    // 把当前节点加入结果数组
    result.push(nodeCopy);

    // 如果有子节点，递归遍历子节点
    if (node[childrenKey] && Array.isArray(node[childrenKey])) {
      node[childrenKey].forEach(child => traverse(child));
    }
  }

  // 处理整个树形结构（支持单节点或数组形式的树）
  if (Array.isArray(tree)) {
    tree.forEach(node => traverse(node));
  } else {
    traverse(tree);
  }

  return result;
}