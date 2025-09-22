/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy; // 修正：prve → prev
  while (true) {
    let tail = prev;
    // 检查剩余节点是否有k个
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) {
        // 不足k个，直接返回结果
        return dummy.next;
      }
    }
    // 保存下一组的头节点
    const nextGroupHead = tail.next;
    // 翻转当前k个节点
    const [newHead, newTail] = reverseList(prev.next, tail);
    // 连接翻转后的链表
    prev.next = newHead;
    newTail.next = nextGroupHead;
    // 移动prev到下一组的前一个节点
    prev = newTail;
  }
};

// 翻转从head到tail的链表，返回新的头和尾
function reverseList(head, tail) {
  let prev = null; // 修正：prve → prev
  let curr = head;
  while (prev !== tail) {
    // 翻转到tail节点为止
    const next = curr.next;
    curr.next = prev; // 翻转指针
    prev = curr; // 移动prev
    curr = next; // 移动curr
  }
  return [tail, head]; // 原tail变新头，原head变新尾
}
