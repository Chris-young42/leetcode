// Trie 构造函数：用一个对象作为根节点（每个属性代表一个字符）
var Trie = function() {
  // 使用普通对象作为根节点容器（下面改进版会说明用 Object.create(null) 的理由）
  this.map = {};
};

/** 
 * 插入一个单词到 Trie 中
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  // temp 指向当前节点（开始于根）
  let temp = this.map;

  // 特殊情况：如果允许空字符串作为单词，可在此处理
  if (word.length === 0) {
    // 标记根节点为结束（表示插入了空串）
    temp.end = true;
    return;
  }

  // 逐字符遍历单词
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    // 如果当前节点没有该字符的子节点，就创建一个空对象作为子节点
    if (!temp[ch]) temp[ch] = {};
    // 进入子节点
    temp = temp[ch];

    // 到达单词最后一个字符时，标记为单词结束
    if (i === word.length - 1) temp.end = true;
  }
};

/** 
 * 搜索一个单词是否存在（必须是完整单词）
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let temp = this.map;

  // 空串处理：如果输入为空串，返回根节点是否被标记为结束
  if (word.length === 0) return Boolean(temp.end);

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    // 如果当前节点有该字符，继续；否则直接返回 false
    if (temp[ch]) {
      temp = temp[ch];
      // 到最后一位时，检查该节点是否是单词结束
      if (i === word.length - 1) return Boolean(temp.end);
    } else {
      return false;
    }
  }

  // 为保险起见，若循环退出也返回 false（一般不会走到这）
  return false;
};

/** 
 * 判断是否存在以 prefix 为前缀的单词
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let temp = this.map;

  // 空前缀总是成立（注意看需求是否要求这种行为）
  if (prefix.length === 0) return true;

  for (let i = 0; i < prefix.length; i++) {
    const ch = prefix[i];
    if (temp[ch]) {
      temp = temp[ch];
      // 到达 prefix 的最后一位，说明找到了这个前缀
      if (i === prefix.length - 1) return true;
    } else {
      return false;
    }
  }

  // 兜底返回 false（通常不会到这里）
  return false;
};
