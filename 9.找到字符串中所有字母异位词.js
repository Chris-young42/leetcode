/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = [];
  const sLen = s.length;
  const pLen = p.length;
  if (sLen < pLen) {
    return res;
  }
  const sCount = new Array(26).fill(0);
  const pCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; i++) {
    pCount[p.charCodeAt(i) - "a".charCodeAt(0)]++;
    sCount[s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  if (isEqual(sCount, pCount)) {
    res.push(0);
  }
  for (let i = pLen; i < sLen; i++) {
    sCount[s.charCodeAt(i - pLen) - "a".charCodeAt(0)]--;
    sCount[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    if (isEqual(sCount, pCount)) {
      res.push(i - pLen + 1);
    }
  }
  return res;
};

function isEqual(arr1, arr2) {
  for (let i = 0; i < 26; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
