/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    //定义推入结果
  const result = [];
  const path = [];
  const used = new Array(nums.length).fill(false);
//   设置回溯函数
  const backtrack = () => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack();
    //   删除下一个的路径
      path.pop();
      used[i] = false;
    }
  };
  backtrack();
  return result;
};
