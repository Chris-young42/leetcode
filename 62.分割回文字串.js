/**
 * 判断 s[left..right] 是否是回文串
 * @param {string} s - 原始字符串
 * @param {number} left - 起始位置
 * @param {number} right - 结束位置
 * @return {boolean} - 是否是回文
 */
var isPalindrome = function(s, left, right) {
    while (left < right) {
        // 左右指针向中间收缩
        if (s.charAt(left++) !== s.charAt(right--)) {
            return false; // 一旦有不相等的字符，就不是回文
        }
    }
    return true; // 全部相等就是回文
}

/**
 * @param {string} s - 待分割的字符串
 * @return {string[][]} - 所有合法的回文分割组合
 */
var partition = function(s) {
    const n = s.length;
    const ans = [];    // 存储最终结果
    const path = [];   // 存储当前分割路径（每段回文子串）

    /**
     * dfs(i, start) 表示：
     *   i 👉 当前处理到的位置（s[i] 是当前考虑的字符）
     *   start 👉 当前回文子串的开始位置
     * 我们在 i 和 i+1 之间要么「分割」、要么「不分割」
     */
    function dfs(i, start) {
        // ✅ 当 i 到达字符串末尾，说明一条完整的分割路径完成
        if (i === n) {
            ans.push(path.slice()); // 复制当前路径，存入结果
            return;
        }

        // 🚫 情况 1：「不分割」
        // 表示 i 和 i+1 之间不插逗号，继续往后走
        if (i < n - 1) {  // i = n-1 时不能再不分割了
            dfs(i + 1, start);
        }

        // ✅ 情况 2：「分割」
        // 选 i 和 i+1 之间的逗号，当前子串结束
        // 判断 s[start..i] 是否是回文串
        if (isPalindrome(s, start, i)) {
            // 如果是回文，就把它加入当前路径
            path.push(s.substring(start, i + 1));
            // 递归下一段从 i+1 开始
            dfs(i + 1, i + 1);
            // 回溯：移除刚加入的子串，尝试其他分割方式
            path.pop();
        }
    }

    // 从第 0 个字符开始搜索
    dfs(0, 0);
    return ans;
}
