/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let left = 0;                     // 左指针从最左边开始
    let right = height.length - 1;    // 右指针从最右边开始
    let leftMax = 0;                  // 左边最大高度
    let rightMax = 0;                 // 右边最大高度
    let res = 0;                      // 总的接雨水量

    // 当左右指针没有相遇时，继续遍历
    while (left < right) {
        if (height[left] < height[right]) {
            // 左边较低，决定水量取决于左边
            // 更新左边最大高度
            leftMax = Math.max(leftMax, height[left]);
            // 左边可以接的水 = 左边最大高度 - 当前高度
            res += leftMax - height[left];
            // 移动左指针
            left++;
        } else {
            // 右边较低，决定水量取决于右边
            // 更新右边最大高度
            rightMax = Math.max(rightMax, height[right]);
            // 右边可以接的水 = 右边最大高度 - 当前高度
            res += rightMax - height[right];
            // 移动右指针
            right--;
        }
    }

    return res; // 返回总的接雨水量
};
