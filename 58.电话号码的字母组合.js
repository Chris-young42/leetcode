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

var letterCombinations = function (digits) {
  const n = digits.length;
  if (n === 0) return [];
  const path = Array(n);
  const ans = [];
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
  dfs(0)
  return ans
};
