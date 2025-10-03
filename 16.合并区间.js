/**
 * 合并区间
 * 给定一组区间，合并所有重叠的区间，返回不重叠的区间数组。
 *
 * 思路：
 * 1. 先按区间起点排序
 * 2. 遍历区间：
 *    - 如果当前区间与结果数组最后一个区间重叠，则合并
 *    - 否则，直接加入结果数组
 *
 * 时间复杂度：O(n log n)，排序占主要开销
 * 空间复杂度：O(n)，结果数组可能包含所有区间
 *
 * @param {number[][]} intervals - 输入的区间数组，每个区间是 [start, end]
 * @return {number[][]} - 合并后的不重叠区间数组
 */
var merge = function (intervals) {
    // 特判：空数组直接返回
    if (!intervals || intervals.length === 0) return [];

    // 1. 按照区间的起点升序排序
    intervals.sort((a, b) => a[0] - b[0]);

    // 结果数组，先把第一个区间放进去
    const merged = [intervals[0]];

    // 2. 遍历剩下的区间
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];              // 当前区间
        const lastMerged = merged[merged.length - 1]; // 结果数组的最后一个区间

        // 3. 判断是否重叠：当前区间的起点 <= 上一个区间的终点
        if (current[0] <= lastMerged[1]) {
            // 重叠 → 合并区间
            // 更新结果数组最后一个区间的终点为两者的较大值
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // 不重叠 → 直接加入结果数组
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
