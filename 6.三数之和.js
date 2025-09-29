/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = []; // 存放最终结果的数组
    const len = nums.length;

    // 如果数组长度小于3，直接返回空数组
    if (len < 3) return result;

    // 1. 先对数组进行升序排序
    // 排序的目的是方便去重和使用双指针法
    nums.sort((a, b) => a - b);

    // 2. 遍历数组，枚举第一个数 nums[i]
    for (let i = 0; i < len; i++) {
        // 如果当前数字大于0，后面的数字都 >= 0，不可能凑成0，直接退出循环
        if (nums[i] > 0) break;

        // 去重：如果当前数字和前一个数字相同，跳过
        // 避免产生重复的三元组
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // 3. 使用双指针法寻找剩下两个数
        let left = i + 1; // 左指针从 i + 1 开始
        let right = len - 1; // 右指针从数组末尾开始

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]; // 当前三数之和

            if (sum === 0) {
                // 找到一组和为0的三元组，加入结果数组
                result.push([nums[i], nums[left], nums[right]]);

                // 4. 去重：跳过左指针重复数字
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                // 去重：跳过右指针重复数字
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // 移动指针，寻找下一组可能的组合
                left++;
                right--;
            } else if (sum < 0) {
                // 如果和小于0，说明需要更大的数，把左指针右移
                left++;
            } else {
                // 如果和大于0，说明需要更小的数，把右指针左移
                right--;
            }
        }
    }

    // 返回所有找到的三元组
    return result;
};
