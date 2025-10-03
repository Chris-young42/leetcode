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
var addTwoNumbers = function(l1, l2) {
    // 创建一个哑节点作为结果链表的起始点
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0; // 进位
    
    // 遍历两个链表，直到两个链表都遍历完且没有进位
    while (l1 !== null || l2 !== null || carry > 0) {
        // 获取当前节点的值，若节点为空则取0
        const val1 = l1 ? l1.val : 0;
        const val2 = l2 ? l2.val : 0;
        
        // 计算当前位的总和：两个节点值之和加上进位
        const sum = val1 + val2 + carry;
        
        // 计算当前位的结果和新的进位
        carry = Math.floor(sum / 10);
        const currentVal = sum % 10;
        
        // 创建新节点并移动指针
        current.next = new ListNode(currentVal);
        current = current.next;
        
        // 移动输入链表的指针
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    // 返回结果链表的头节点（哑节点的下一个节点）
    return dummyHead.next;
};