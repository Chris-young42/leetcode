# 💥 炫酷的 JavaScript 力扣练习仓库

> **Welcome to my LeetCode dojo — JavaScript edition.**
> 这里汇集了我用 JavaScript（含 ES6+）写出的力扣题解：从基础题到面试重灾区，一路刷题，一路升维。⚔️

---

## 🔥 简介

这个仓库是为提升算法能力与 JavaScript 编程素养打造的练习场。每道题我都会包含：思路、代码、时间/空间复杂度、以及常见坑点。风格偏实战、可复用、米哈游式（帅气且高效）。

目标：

* 把每种套路做到心中有数（双指针、滑动窗口、单调栈、并查集、树遍历、动态规划...）
* 用干净利落的 JS 写法 —— 可读、可复用、可面试现场背讲。

---

## 🚀 目录结构（建议）

```
leetcode-js/                # 仓库根目录
├─ README.md                # 这个文件
├─ problems/                # 按题号或标签存放题解文件夹
│  ├─ 0001-two-sum/         # 每题一个文件夹
│  │  ├─ README.md          # 题目描述 + 思路 + 复杂度说明
│  │  └─ solution.js        # JS 解法（含注释）
│  └─ ...
├─ patterns/                # 常见算法套路总结
└─ utils/                   # 常用工具函数（链表构造、树构造、测试框架）
```

---

## ✨ 书写规范（约定俗成，方便复盘）

* 每题 `README.md` 必须包含：题目、样例、直觉/思路、伪代码、JS 代码、复杂度分析、边界条件。
* 文件名尽量带题号：`0001-two-sum`，方便排序和检索。
* 代码风格：使用 `const` / `let`，优先箭头函数、解构、短路、模板字符串，但可读性第一。
* 提交解法后在 PR/Commit 中写一句一句话结论（例如：`Use hash map, O(n) time, O(n) space`）。

---

## 🧩 题解模板（README.md）

```md
# 0001. Two Sum

**题目**：给定一个整数数组和目标值，找出数组中和为目标值的两个数的下标。

**思路**：哈希表一遍遍历，记录已访问数字与下标。

**伪代码**：
- 遍历 nums：
  - 计算 complement = target - nums[i]
  - 若 complement 在 map 中，返回 [map[complement], i]
  - 否则 map[nums[i]] = i

**复杂度**：时间 O(n)，空间 O(n)

**JS 实现**：见 `solution.js`
```

---

## 💻 推荐 `solution.js` 风格

```js
// solution.js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (map.has(need)) return [map.get(need), i];
    map.set(nums[i], i);
  }
  return [];
};

module.exports = twoSum;
```

---

## 🧠 刷题小技巧（面试导向）

* 读题先停 10 秒：输入输出边界、特殊值、是否有重复、是否有负数。
* 先写暴力解再优化：白板上先讲思路，代码里再把优化过程做成注释。
* 把常见套路做成笔记卡片（5-10 道题一组），定期复盘。
* 写测试用例：空数组、单元素、重复元素、极值边界。

---

## 🎯 常见套路速查（示例）

* 双指针：有序数组、反转、判断回文
* 滑动窗口：子数组和、最长子串问题
* 单调栈：下一个更大元素、直方图面积
* 哈希表：两数问题、频率统计
* DFS / 回溯：子集、排列、全排列
* 动态规划：背包、最长公共子序列、状态压缩

---

## 🤝 贡献指南

欢迎 Fork、Star、提 PR。PR 模板建议包含：题号、思路简述、复杂度声明。若代码风格不统一，我会在 PR 中帮你调整为仓库统一风格。

---

## ✨ 结尾 — 励志一句

> 刷题不是为了刷题本身，而是为了成为面试房间里那个冷静拆解问题并优雅编码的人。保持好奇，保持练习。💪




