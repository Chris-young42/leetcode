/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []; // 模拟递归
    let res = '';     // 当前层构建的结果
    let k = 0;        // 当前解析的重复次数

    for (const c of s) {
        // 1. 如果是字母，直接加入当前结果
        if ('a' <= c && c <= 'z') {
            res += c;
        } 
        
        // 2. 如果是数字，更新 k（可能是多位数）
        else if ('0' <= c && c <= '9') {
            k = k * 10 + parseInt(c); // 累积，比如 "23" -> k = 2 -> 23
        } 
        
        // 3. 如果遇到 '['，进入下一层递归
        else if (c === '[') {
            // 将当前状态压栈
            stack.push([res, k]);
            // 重置 res 和 k
            res = '';
            k = 0;
        } 
        
        // 4. 如果遇到 ']'，递归返回
        else { // c === ']'
            const [pre_res, pre_k] = stack.pop();
            // 当前 res 是中括号内的内容
            // pre_k 表示需要重复几次
            res = pre_res + res.repeat(pre_k);
        }
    }

    return res;
};
