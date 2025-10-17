/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  let res = "";
  let k = 0;
  for (const c of s) {
    if ("a" <= c && c <= "z") {
      res += c;
    } else if ("0" <= c && c <= "9") {
      k = k * 10 + parseInt(c);
    } else if (c === "[") {
      stack.push([res, k]);
      res = "";
      k = 0;
    } else {
      const [pre_res, pre_k] = stack.pop();
      res = pre_res + res.repeat(pre_k);
    }
  }
  return res;
};
