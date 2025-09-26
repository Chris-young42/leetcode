/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const n = s.length;
  const last = Array(26);
  for (let i = 0; i < n; i++) {
    last[s.charCodeAt(i) - "a".charCodeAt(0)] = i;
  }
  const ans = [];
  let start = 0,
    end = 0;
  for (let i = 0; i < n; i++) {
    end = Math.max(end, last[s.charCodeAt(i) - "a".charCodeAt(0)]);
    if (end === i) {
      ans.push(end - start + 1);
      start = i + 1;
    }
  }
  return ans;
};
