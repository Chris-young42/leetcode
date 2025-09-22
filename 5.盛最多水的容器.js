/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    let w = right - left;
    let h = Math.min(height[left], height[right]);
    let curArea = w * h;

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
    maxArea = Math.max(maxArea, curArea);
  }
  return maxArea;
};
