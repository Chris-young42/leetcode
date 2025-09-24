/**
 * @param {string} s
 * @return {string[][]}
 */
//判断回文子串
var isPalindrome = function (s, left, right) {
  while (left < right) {
    if (s.charAt(left++) !== s.charAt(right--)) {
      return false;
    }
  }
  return true;
};
var partition = function (s) {
  const n = s.length;
  const ans = [];
  const path = [];

  function dfs(i, start) {
    if (i === n) {
      ans.push(path.slice());
      return;
    }
    if (i < n - 1) {
      dfs(i + 1, start);
    }

    if (isPalindrome(s.start.i)) {
      path.push(s.substring(start, i + 1));
      dfs(i + 1, i + 1);
      path.pop();
    }
  }
  dfs(0, 0);
  return ans;
};
