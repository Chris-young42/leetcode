/**
 * 单链表节点定义
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 交换链表中每两个相邻节点（两两交换）
 * @param {ListNode} head 链表头节点
 * @return {ListNode} 新的链表头节点
 */
var swapPairs = function (head) {
  // 建立一个虚拟头节点 dummy（值为 0，不参与运算）
  // 这样可以避免处理头结点特殊情况（比如 head 本身就要被交换）
  const dummy = new ListNode(0, head);

  // prev 用来指向“当前要交换的一对节点”的前一个节点
  let prev = dummy;

  // 循环条件：必须至少有两个节点可以交换
  while (prev.next !== null && prev.next.next !== null) {
    // 标记出将要交换的两个节点
    const node1 = prev.next;       // 第一个节点
    const node2 = prev.next.next;  // 第二个节点

    // 记录第二个节点后面的节点（下一对的起点）
    const nextPair = node2.next;

    // === 开始交换 ===
    prev.next = node2;     // 让前一个节点指向第二个节点
    node2.next = node1;    // 第二个节点指向第一个节点
    node1.next = nextPair; // 第一个节点指向剩下的链表
    // === 交换结束 ===

    // 移动 prev，准备处理下一对（现在 node1 在第二位，所以 prev = node1）
    prev = node1;
  }

  // 返回新的头节点（虚拟头的 next 就是新链表的真正头）
  return dummy.next;
};

