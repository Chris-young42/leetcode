/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const dummyhead = new ListNode(0);
  let current = dummyhead;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry > 0) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const currentVal = sum % 10;
    current.next = new ListNode(currentVal);
    current = current.next;
    if (li) l1.next;
    if (l2) l2.next;
  }
  return dummyhead.next;
};
