/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let slow = head;
  let fast = head;
  while (fast.next &&fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let secondHalf = reverseList(slow.next);
  let p1 = head;
  let p2 = secondHalf;
  let isPalin = true;
  while (isPalin && p2) {
    if (p1.val !== p2.val) {
      isPalin = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  slow.next = reverseList(secondHalf);
  return isPalin;
};


function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const nextTemp = curr.next;
    curr.next=prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
}
