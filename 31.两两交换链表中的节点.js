/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const pre = new ListNode(0, head);
  let prev = pre;
  while (prev.next !== null && prev.next.next) {
    const node1 = prev.next;
    const node2 = prev.next.next;
    const newNode = prev.next.next.next;
    prev.next = node2;
    node2.next = node1;
    node1.next = newNode;
    pre = node1;
  }
  return pre.next;
};
