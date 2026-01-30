/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 合并 K 个有序链表
 * @param {ListNode[]} lists - 链表数组，每个链表都是升序排列
 * @return {ListNode} - 合并后的有序链表
 */
var mergeKLists = function (lists) {
  // 特殊情况：输入为空，直接返回 null
  if (!lists || !lists.length) return null;

  /**
   * 分治递归合并链表
   * @param {number} i - 起始索引
   * @param {number} j - 结束索引
   * @return {ListNode} - 合并后的链表
   */
  const mergeList = (i, j) => {
    // 当区间非法时（i > j），返回 null
    if (i > j) return null;

    // 区间只有一个链表，直接返回它
    if (i === j) return lists[i];

    // 找到中点，把区间一分为二
    const mid = Math.floor((j - i) / 2) + i;

    // 递归合并左半部分
    const left = mergeList(i, mid);

    // 递归合并右半部分
    const right = mergeList(mid + 1, j);

    // 把两个有序链表合并成一个
    return merge(left, right);
  };

  // 从 0 到 n-1 区间开始分治合并
  return mergeList(0, lists.length - 1);
};

/**
 * 合并两个有序链表（和 LeetCode 21 一样）
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const merge = (l1, l2) => {
  // 哑节点（dummy），用来简化链表操作
  let dummyHead = new ListNode(-1);
  let cur = dummyHead;

  // 遍历两个链表，取较小的节点依次拼接
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1; // 接上 l1
      l1 = l1.next; // l1 指针后移
    } else {
      cur.next = l2; // 接上 l2
      l2 = l2.next; // l2 指针后移
    }
    cur = cur.next; // cur 指针后移
  }

  // 把剩余的节点直接接上（只有一个链表会剩下）
  cur.next = l1 || l2;

  // 返回合并后链表的头结点
  return dummyHead.next;
};
var mergeKLists = function (lists) {
  return lists
    .reduce((acc, list) => {
      while (list) {
        acc.push(list);
        list = list.next;
      }
      return acc;
    }, [])
    .sort((a, b) => a.val - b.val)
    .reduceRight((mergedList, currentNode) => {
      currentNode.next = mergedList;
      mergedList = currentNode;
      return mergedList;
    }, null);
};
