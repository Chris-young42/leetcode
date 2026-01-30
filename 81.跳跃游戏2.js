/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // ans：最少跳跃次数
  let ans = 0;

  // curRight：当前这一跳，最远能到达的位置（当前覆盖区间的右边界）
  let curRight = 0;

  // nextRight：在当前覆盖区间内，下一跳能到达的最远位置
  let nextRight = 0;

  // 注意：遍历到 nums.length - 2 即可
  // 因为只要能覆盖到最后一个位置，就不需要再跳了
  for (let i = 0; i < nums.length - 1; i++) {

    // 在当前这一步的覆盖范围内
    // 不断尝试更新“下一步最远能跳到哪里”
    nextRight = Math.max(nextRight, i + nums[i]);

    // 当 i 走到了当前这一步能覆盖的最右端
    // 说明：这一跳的所有可能落点都已经考察完了
    if (i === curRight) {
      // 必须进行一次新的跳跃
      ans++;

      // 更新当前覆盖区间为下一跳能达到的最远位置
      curRight = nextRight;
    }
  }

  // 返回最少跳跃次数
  return ans;
};
