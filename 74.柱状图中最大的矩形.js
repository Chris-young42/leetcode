/**
 * 计算柱状图中能够勾勒出的最大矩形面积
 * @param {number[]} heights - 表示柱状图高度的数组，每个元素代表对应位置柱子的高度
 * @return {number} - 返回能够形成的最大矩形面积
 */
var largestRectangleArea = function (heights) {
  // 1. 预处理：在原数组首尾各添加一个高度为0的"哨兵"
  // 作用：
  // - 头部哨兵：确保栈永远不会为空，避免处理栈空的边界情况
  // - 尾部哨兵：确保能触发栈中所有剩余元素的计算，不会遗漏
  const newHeights = [0, ...heights, 0];
  
  // 2. 初始化单调栈：栈中存储的是newHeights数组的索引，且索引对应的高度保持单调递增
  // 单调栈的核心作用：快速找到每个柱子左边和右边第一个比它矮的柱子
  const stack = [];
  
  // 3. 初始化最大面积为0，用于记录遍历过程中找到的最大矩形面积
  let maxArea = 0;

  // 4. 遍历处理后的高度数组
  for (let i = 0; i < newHeights.length; i++) {
    // 5. 当栈不为空，且当前柱子高度小于栈顶索引对应的柱子高度时
    // 说明找到了栈顶柱子的右边界（当前i），可以计算以栈顶柱子为高度的矩形面积
    while (
      stack.length > 0 &&
      newHeights[i] < newHeights[stack[stack.length - 1]]
    ) {
      // 弹出栈顶索引，该索引对应的柱子高度作为矩形的高度
      const topIndex = stack.pop();
      const height = newHeights[topIndex];
      
      // 计算矩形的宽度：
      // 弹出栈顶后，新的栈顶索引是当前柱子的左边界（第一个比它矮的柱子）
      // 宽度 = 右边界索引 - 左边界索引 - 1
      const width = i - stack[stack.length - 1] - 1;
      
      // 计算当前矩形面积，并更新最大面积
      const currentArea = height * width;
      maxArea = Math.max(maxArea, currentArea);
    }
    // 6. 如果当前柱子高度大于等于栈顶索引对应的高度，直接入栈（保持栈的单调递增性）
    stack.push(i);
  }

  // 7. 返回计算得到的最大矩形面积
  return maxArea;
};


//双指针 js中运行速度最快
var largestRectangleArea = function(heights) {
    const len = heights.length;
    const minLeftIndex = new Array(len);
    const maxRightIndex = new Array(len);
    // 记录每个柱子 左边第一个小于该柱子的下标
    minLeftIndex[0] = -1; // 注意这里初始化，防止下面while死循环
    for(let i = 1; i < len; i++) {
        let t = i - 1;
        // 这里不是用if，而是不断向左寻找的过程
        while (t >= 0 && heights[t] >= heights[i]) {
			t = minLeftIndex[t];
		}
        minLeftIndex[i] = t;
    }
    // 记录每个柱子 右边第一个小于该柱子的下标
    maxRightIndex[len - 1] = len; // 注意这里初始化，防止下面while死循环
    for(let i = len - 2; i >= 0; i--){
        let t = i + 1;
        // 这里不是用if，而是不断向右寻找的过程
        while (t <= n && heights[t] > heights[i]) {
			t = maxRightIndex[t];
		}
        maxRightIndex[i] = t;
    }
    // 求和
    let maxArea = 0;
    for(let i = 0; i < len; i++){
        let sum = heights[i] * (maxRightIndex[i] - minLeftIndex[i] - 1);
        maxArea = Math.max(maxArea , sum);
    }
    return maxArea;
};

//单调栈
var largestRectangleArea = function(heights) {
	let maxArea = 0;
	const stack = [0];
	heights.push(0);
	const n = heights.length;

	for (let i = 1; i < n; i++) {
		let top = stack.at(-1);
        // 情况三
		if (heights[top] < heights[i]) {
			stack.push(i);
		}
        // 情况二
		if (heights[top] === heights[i]) {
			stack.pop(); // 这个可以加，可以不加，效果一样，思路不同
			stack.push(i);
		}
        // 情况一
		if (heights[top] > heights[i]) {
			while (stack.length > 0 && heights[top] > heights[i]) {
                // 栈顶元素出栈，并保存栈顶bar的索引
				const h = heights[stack.pop()];
				const left = stack.at(-1) ?? -1;
				const w = i - left - 1;
                // 计算面积，并取最大面积
				maxArea = Math.max(maxArea, w * h);
				top = stack.at(-1);
			}
			stack.push(i);
		}
	}
	return maxArea;
};

//单调栈 简洁
var largestRectangleArea = function(heights) {
    let maxArea = 0;
    const stack = [];
    heights = [0,...heights,0]; // 数组头部加入元素0 数组尾部加入元素0
    for(let i = 0; i < heights.length; i++){ // 只用考虑情况一 当前遍历的元素heights[i]小于栈顶元素heights[stack[stack.length-1]]]的情况
        while(heights[i] < heights[stack[stack.length-1]]){// 当前bar比栈顶bar矮
            const stackTopIndex = stack.pop();// 栈顶元素出栈，并保存栈顶bar的索引
            let w = i - stack[stack.length -1] - 1;
            let h = heights[stackTopIndex]
            // 计算面积，并取最大面积
            maxArea = Math.max(maxArea, w * h);
        }
        stack.push(i);// 当前bar比栈顶bar高了，入栈
    }
    return maxArea;
};