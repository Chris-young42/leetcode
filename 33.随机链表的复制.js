/**
 * // 链表节点定义
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;       // 指向下一个节点
 *    this.random = random;   // 随机指针，可能指向链表中任意一个节点，也可能是 null
 * };
 */

/**
 * 深拷贝一个带随机指针的链表
 * @param {Node} head - 原链表的头结点
 * @return {Node} - 新链表的头结点
 */
var copyRandomList = function (head) {
  // 特殊情况：空链表，直接返回 null
  if (!head) return null;

  // 用一个 Map 建立 “原节点 -> 新节点” 的映射关系
  // 为什么需要这个？
  // 因为 random 可能指向任意节点，如果我们要设置新节点的 random，
  // 就得知道对应的新节点是谁，因此需要映射表。
  const map = new Map();

  // 第一遍遍历：只创建新节点（val 一样），但不设置 next 和 random
  let curr = head;
  while (curr) {
    map.set(curr, new Node(curr.val)); // 把原节点对应的新节点存到 map
    curr = curr.next;
  }

  // 第二遍遍历：给新节点补上 next 和 random
  curr = head;
  while (curr) {
    // 设置新节点的 next
    // map.get(curr) 是当前原节点对应的新节点
    // map.get(curr.next) 是原节点 next 对应的新节点
    // 如果 curr.next 是 null，就直接用 null
    map.get(curr).next = map.get(curr.next) || null;

    // 设置新节点的 random
    // 同理，map.get(curr.random) 是对应的新 random 节点
    map.get(curr).random = map.get(curr.random) || null;

    // 原链表指针继续往后
    curr = curr.next;
  }

  // 返回新链表的头节点（即原 head 对应的新节点）
  return map.get(head);
};
