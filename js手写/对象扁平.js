function flattenObj(obj, parentKey = '', result = {}) {
  // 遍历对象的每个属性
  for (const key in obj) {
    // 拼接当前层级的键名（根级直接用key，嵌套级用parentKey.key）
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    // 判断当前属性值是否为对象且不为null
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      // 递归处理嵌套对象
      flattenObj(obj[key], newKey, result);
    } else {
      // 基础类型直接存入结果
      result[newKey] = obj[key];
    }
  }
  return result;
}
