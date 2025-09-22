/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (!lists || !lists.length) return null;
  const mergeList = (i, j) => {
    if (i > j) return;
    if (i === j) return lists[i];
    const mid = Math.floor((j - i) / 2) + i;
    const left = mergeList(i, mid);
    const right = mergeList(mid + 1, j);
    return merge(left, right);
  };
  return mergeList(0, lists.length - 1);
};

const merge = (l1, l2) => {
  let dummyHead = new ListNode(-1);
  let cur = dummyHead;
  while (l1 && l2) {
    if (l1.val && l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return dummyHead.next;
};
