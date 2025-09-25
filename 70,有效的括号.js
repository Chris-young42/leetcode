/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (map[char]) {
      stack.push(map[char]);
    } else if (char !== stack.pop()) {
      return false;
    }
  }
  return stack.length === 0;
};
