/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const merged = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const lastMerged = merged[merged.length - 1];
    if (current[0] <= lastMerged[1]) {
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      merged.push(current);
    }
  }
  return merged;
};

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 边界条件处理：如果数组不存在或为空，直接返回空数组
  if (!intervals || intervals.length === 0) return [];

  // 按照区间的起始值进行升序排序
  intervals.sort((a, b) => a[0] - b[0]);

  // 用于存储合并后的区间
  const merged = [intervals[0]]; // 初始化第一个区间

  // 从第二个区间开始处理
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    // 获取已合并区间的最后一个区间
    const lastMerged = merged[merged.length - 1];

    // 判断当前区间是否与最后一个已合并区间重叠
    if (current[0] <= lastMerged[1]) {
      // 重叠则合并，更新结束值为两个区间结束值的最大值
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // 不重叠则直接添加当前区间
      merged.push(current);
    }
  }

  return merged;
};
