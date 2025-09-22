/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let charIndex = {};
  let left= 0;
  let maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right];
    if (charIndex[currentChar] !== undefined && charIndex[currentChar] >= left) {
      left = charIndex[currentChar] + 1;
    }
    charIndex[currentChar] = right;
    maxLength = Math.max(maxLength,(right - left + 1));
  }
  return maxLength;
};

