/**
 * 单链表节点的定义
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 检测链表中是否有环，并返回环的起始节点
 * 如果没有环，返回 null
 *
 * 核心算法：Floyd 判圈法（快慢指针法）
 *
 * @param {ListNode} head - 链表头结点
 * @return {ListNode|null} - 环的入口节点 或 null
 */
var detectCycle = function (head) {
  // 如果链表为空，或者只有一个节点（不可能有环）
  if (!head || !head.next) {
    return null;
  }

  // 定义两个指针：慢指针 slow 每次走一步，快指针 fast 每次走两步
  let slow = head;
  let fast = head;

  // 标记是否存在环
  let hasCycle = false;

  // 快指针能走到结尾说明没有环，所以循环条件是 fast 和 fast.next 都要存在
  while (fast && fast.next) {
    slow = slow.next;       // 慢指针走一步
    fast = fast.next.next;  // 快指针走两步

    // 如果 slow 和 fast 相遇，说明链表中存在环
    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }

  // 如果没有环，直接返回 null
  if (!hasCycle) {
    return null;
  }

  /**
   * 重点：
   * 当 slow 和 fast 在环中第一次相遇时，
   * 假设：
   *   head 到环入口的距离是 a
   *   环入口到相遇点的距离是 b
   *   环的长度是 c
   *
   * 那么：快指针走的距离 = 2 * 慢指针走的距离
   *     => a + b + n*c = 2 * (a + b)
   *     => a = n*c - b
   *     => a = (n-1)*c + (c - b)
   *
   * 解释：
   *   从 head 出发到入口有 a 步，
   *   相遇点再往前走 (c - b) 步也能到入口。
   *   所以如果一个指针从 head 出发，另一个指针从相遇点出发，
   *   它们每次走一步，最终会在环的入口相遇。
   */

  // 重新把 slow 移回链表头
  slow = head;

  // slow 和 fast 每次都走一步，最终会在环入口相遇
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  // 相遇点就是环的入口
  return slow;
};
