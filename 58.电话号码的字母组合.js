/**
 * @param {string} digits - 输入的数字字符串，例如 "23"
 * @return {string[]} - 返回所有可能的字母组合
 */

// 数字与字母的映射表（电话按键）
const MAPPING = [
  "",      // 0 -> 无字母
  "",      // 1 -> 无字母
  "abc",   // 2 -> a,b,c
  "def",   // 3 -> d,e,f
  "ghi",   // 4 -> g,h,i
  "jkl",   // 5 -> j,k,l
  "mno",   // 6 -> m,n,o
  "pqrs",  // 7 -> p,q,r,s
  "tuv",   // 8 -> t,u,v
  "wxyz"   // 9 -> w,x,y,z
];

var letterCombinations = function (digits) {
  const n = digits.length; // 数字串长度
  if (n === 0) return [];  // 边界情况：输入为空字符串时直接返回空数组

  const path = Array(n);   // 用来记录当前路径（例如 ["a","d"]）
  const ans = [];          // 保存所有结果组合

  /**
   * dfs(i): 表示当前正在处理第 i 个数字（digits[i]）
   * - 每次递归负责确定第 i 位的字母
   * - 当 i === n 时，说明所有数字都处理完，可以收集结果
   */
  function dfs(i) {
    // ✅ 递归终止条件：当下标 i 到达末尾
    if (i === n) {
      ans.push(path.join("")); // 把路径里的字母拼成字符串加入结果
      return;
    }

    // 取出 digits[i] 对应的所有可能字母
    const letters = MAPPING[Number(digits[i])];

    // 遍历所有可能字母
    for (const c of letters) {
      // 选择一个字母放入当前位置
      path[i] = c;

      // 递归进入下一层，处理下一个数字
      dfs(i + 1);

      // （不需要显式回溯，因为 path[i] 会被下一次覆盖）
    }
  }

  // 从第 0 个数字开始搜索
  dfs(0);

  // 返回所有可能组合
  return ans;
};
