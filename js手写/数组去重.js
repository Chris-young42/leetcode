function uniqueByFilter(arr) {
  // 过滤条件：元素的首次出现索引 === 当前遍历索引（只保留首次出现的元素）
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

function uniqueBySet(arr) {
  // Set 自动去重，扩展运算符将 Set 转回数组
  return [...new Set(arr)];
  // 等价写法：return Array.from(new Set(arr));
}
// 方法3：对象哈希表 去重
function uniqueByObject(arr) {
  const obj = {};
  const result = [];
  let len = arr.length
  for (let i = 0; i < len; i++) {
    const item = arr[i];
    // 检查对象中是否已有该键（避免重复）
    // 拼接类型：解决 1 和 '1' 被误判为重复的问题
    const key = typeof item + '_' + item;
    if (!obj[key]) {
      obj[key] = true; // 标记为已存在
      result.push(item); // 加入结果数组
    }
  }
  return result;
}
