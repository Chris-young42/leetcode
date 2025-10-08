/**
 * @param {string} s
 * @return {string[][]}
 */
var isPalindrome = function(s, left, right) {
    while (left < right) {
        if (s.charAt(left++) !== s.charAt(right--)) {
            return false;
        }
    }
    return true;
}

var partition = function(s) {
    const n = s.length;
    const ans = [];
    const path = [];

    // 考虑 i 后面的逗号怎么选
    // start 表示当前这段回文子串的开始位置
    function dfs(i, start) {
        if (i === n) { // s 分割完毕
            ans.push(path.slice()); // 复制 path
            return;
        }

        // 不分割，不选 i 和 i+1 之间的逗号
        if (i < n - 1) { // i=n-1 时只能分割
            // 考虑 i+1 后面的逗号怎么选
            dfs(i + 1, start);
        }

        // 分割，选 i 和 i+1 之间的逗号（把 s[i] 作为子串的最后一个字符）
        if (isPalindrome(s, start, i)) {
            path.push(s.substring(start, i + 1));
            // 考虑 i+1 后面的逗号怎么选
            // start=i+1 表示下一个子串从 i+1 开始
            dfs(i + 1, i + 1);
            path.pop(); // 恢复现场
        }
    }

    dfs(0, 0);
    return ans;
};
