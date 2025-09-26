/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const newHeights = [0, ...heights, 0];
  const stack = [];
  let maxArea = 0;
  for (let i = 0; i < newHeights.length; i++) {
    while (
      stack.length > 0 &&
      newHeights[i] < newHeights[stack[stack.length - 1]]
    ) {
      const height = newHeights[stack.pop];
      const width = i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }
    stack.push(i);
  }
  return maxArea;
};
