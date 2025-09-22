var Trie = function () {
  this.map = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let temp = this.map;
  for (let i = 0; i < word.length; i++) {
    if (!temp[word[i]]) temp[word[i]] = {};
    temp = temp[word[i]];
    if (i === word.length - 1) temp.end = true;
  }
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let temp = this.map;
  for (let i = 0; i < word.length; i++) {
    if (temp[word[i]]) {
      temp = temp[word[i]];
      if (i === word.length - 1) return Boolean(temp.end);
    }
  }
};
/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let temp = this.map;
  for (let i = 0; i < prefix.length; i++) {
    if (temp[prefix[i]]) {
      temp = temp[prefix[i]];
      if (i === prefix.length - 1) return true;
    } else return false;
  }
};
