/**
 * @param {string} digits
 * @return {string[]}
 */
const MAPPING = [
  "",
  "",
  "abc",
  "def",
  "ghi",
  "jkl",
  "mno",
  "pqrs",
  "tuv",
  "wxyz",
];
// 设置电话表
var letterCombinations = function (digits) {
  //定义输入的按键长度
  const n = digits.length;
  //定义边界情况
  if (n === 0) return [];
  // 设置对应的路径，数组存储
  const path = Array(n);
  //存储最终结果
  const ans = [];
  //深度搜索
  function dfs() {
    if (i === n) {
      ans.push(path.join(""));
      return;
    }
    const letters = MAPPING[Number(digits[i])];
    for (const c of letters) {
      path[i] = c;
      dfs(i + 1);
    }
  }
  dfs(0);
  return ans;
};
