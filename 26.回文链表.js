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
var isPalindrome = function(head) {
    // 处理空链表或只有一个节点的情况
    if (!head || !head.next) return true;
    
    // 步骤1: 找到链表的中间节点
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;       // 慢指针走一步
        fast = fast.next.next;  // 快指针走两步 
    }
    
    // 步骤2: 反转后半部分链表
    let secondHalf = reverseList(slow.next);
    
    // 步骤3: 比较前半部分和反转后的后半部分
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
    
    // 可选：恢复链表结构（如果需要保持原链表不变）
    slow.next = reverseList(secondHalf);
    
    return isPalin;
};

// 辅助函数：反转链表
function reverseList(head) {
    let prev = null;
    let curr = head;
    
    while (curr) {
        const nextTemp = curr.next;  // 保存下一个节点
        curr.next = prev;            // 反转当前节点的指针
        prev = curr;                 // 移动prev指针
        curr = nextTemp;             // 移动curr指针
    }
    
    return prev;  // prev成为反转后链表的头节点
}
    