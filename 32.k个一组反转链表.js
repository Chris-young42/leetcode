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
  // 创建虚拟头节点，简化边界处理
  const dummy = new ListNode(0, head);

  // prev 指向每组翻转节点的前一个节点
  let prev = dummy;

  while (true) {
    // 检查剩余节点是否有 k 个
    let tail = prev;
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      // 如果剩余节点不足 k 个，直接返回结果
      if (!tail) {
        return dummy.next;
      }
    }

    // 保存下一组的头节点
    const nextGroupHead = tail.next;

    // 翻转当前 k 个节点，并获取翻转后的头节点
    const [newHead, newTail] = reverseList(prev.next, tail);

    // 将翻转后的子链表与前后连接
    prev.next = newHead;
    newTail.next = nextGroupHead;

    // 移动 prev 到下一组的前一个节点（即当前组的尾节点）
    prev = newTail;
  }
};

/**
 * 翻转从 head 到 tail 的链表，并返回新的头和尾
 */
function reverseList(head, tail) {
  let prev = null;
  let curr = head;

  // 翻转直到处理完 tail 节点
  while (prev !== tail) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  // 翻转后，原 tail 变成新 head，原 head 变成新 tail
  return [tail, head];
}
