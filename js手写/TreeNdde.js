
/**
 * 深度优先扁平化树形对象（纯 Object）
 * @param {Object} node - 树形节点对象
 * @param {Array} result - 存储结果的数组（递归传递）
 * @param {string} childrenKey - 子节点字段名，默认 'children'
 * @returns {Array<Object>} 扁平化后的一维数组
 */
function flattenTreeDFS(node, result = [], childrenKey = 'children') {
  if (!node) return result;

  const cloneNode = { ...node };
  delete cloneNode[childrenKey];
  result.push(cloneNode);

  // 2. 递归处理所有子节点
  if (node[childrenKey] && Array.isArray(node[childrenKey])) {
    node[childrenKey].forEach(child => {
      flattenTreeDFS(child, result, childrenKey);
    });
  }

  return result;
}