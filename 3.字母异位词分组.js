/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (const str of strs) {
    let key = str.split("").sort().join();
    map.has(key) ? map.get(key).push(str) : map.set(key, [str]);
  }
  return Array.from(map.values());
};
