function arrayToTree(
  list,          // 要转换的扁平数组
  idkey = "id",  // 自定义id字段名（默认"id"）
  pidKey = "pid",// 自定义父id字段名（默认"pid"）
  childrenKey = "children",// 自定义子节点字段名（默认"children"）
) {
  // 1. 初始化map对象：用来快速查找节点（空间换时间）
  const map = {};
  // 2. 初始化tree数组：最终返回的树形结构根节点集合
  const tree = [];

  // 第一步：遍历数组，把每个节点存入map，同时初始化children为空数组
  list.forEach((item) => {
    // map的key是节点id，value是节点本身+空的children数组
    map[item[idkey]] = { ...item, [childrenKey]: [] };
  });

  // 第二步：遍历数组，把节点挂载到对应的父节点下
  list.forEach((item) => {
    // 获取当前节点的父id
    const pid = item[pidKey];
    // 判断：如果父id是null/undefined/0，说明是根节点，直接加入tree
    if (pid === null || pid === undefined || pid === 0) {
      tree.push(map[item[idkey]]);
    } else {
      // 非根节点：如果父节点存在于map中，就把当前节点加入父节点的children
      if (map[pid]) {
        map[pid][childrenKey].push(map[item[idkey]]);
      }
    }
  });

  // 返回最终的树形结构
  return tree;
}