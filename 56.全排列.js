/**
 * @param {number[]} nums - 输入数组，例如 [1,2,3]
 * @return {number[][]} - 返回所有数字的全排列
 */
var permute = function (nums) {
  const result = [];                   // 存放所有排列结果
  const path = [];                     // 当前构建的排列路径
  const used = new Array(nums.length).fill(false); // 记录每个数字是否被使用过

  /**
   * 回溯函数：用于构造所有可能的排列
   */
  const backtrack = () => {
    // ✅ 递归终止条件
    // 当 path 的长度等于 nums 的长度，说明一个完整的排列形成
    if (path.length === nums.length) {
      result.push([...path]); // 拷贝 path 加入结果
      return;
    }

    // 遍历 nums 中的每个数字，尝试放到当前排列的下一个位置
    for (let i = 0; i < nums.length; i++) {
      // 如果这个数字已经用过了，就跳过
      if (used[i]) continue;

      // 做选择：使用 nums[i]
      used[i] = true;
      path.push(nums[i]);

      // 进入下一层递归，继续构造排列
      backtrack();

      // 回溯：撤销刚才的选择
      path.pop();
      used[i] = false;
    }
  };

  // 从空排列开始构造
  backtrack();
  return result;
};
