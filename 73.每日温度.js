/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length;            // 数组长度
    const ans = Array(n).fill(0);             // 结果数组，默认 0（找不到更暖的一律为 0）
    const st = [];                            // 单调栈，存下标

    for (let i = n - 1; i >= 0; i--) {        // 从右向左遍历每一天
        const t = temperatures[i];            // 当前天的温度
        // 弹出栈中所有温度 <= 当前温度的下标（它们不可能成为 i 的“第一个更暖的天”）
        while (st.length && t >= temperatures[st[st.length - 1]]) {
            st.pop();
        }
        // 弹完后，如果栈非空，栈顶就是右侧第一个更高温度的下标
        if (st.length) {
            ans[i] = st[st.length - 1] - i;
        }
        // 把当前天入栈，作为比更左边天候选的“更暖天”
        st.push(i);
    }
    return ans;
};