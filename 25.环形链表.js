/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 处理空链表或只有一个节点且无环的情况
    if (!head || !head.next) {
        return false;
    }
    
    // 初始化快慢指针
    let slow = head;  // 慢指针每次走一步
    let fast = head.next;  // 快指针每次走两步
    
    // 当快慢指针不相遇时继续移动
    while (slow !== fast) {
        // 如果快指针到达链表末尾，说明没有环
        if (!fast || !fast.next) {
            return false;
        }
        
        slow = slow.next;        // 慢指针前进一步
        fast = fast.next.next;   // 快指针前进两步
    }
    
    // 如果快慢指针相遇，说明存在环
    return true;
};
    