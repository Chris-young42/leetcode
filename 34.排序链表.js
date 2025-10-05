/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * 排序链表（归并排序思想）
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    // 边界情况：空链表 或 只有一个节点 → 已经有序，直接返回
    if (!head || !head.next) {
        return head;
    }
    
    // === 步骤1：找到链表的中点，把链表切成两半 ===
    let slow = head;
    let fast = head.next;  
    // fast 每次走两步，slow 每次走一步
    // 当 fast 到达链表尾部时，slow 正好在中点
    // 这里 fast 从 head.next 出发，保证 slow 落在中点前一个节点
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    const mid = slow.next; // mid 是右半部分的起点
    slow.next = null;      // 断开链表，分成左右两段
    
    // === 步骤2：递归排序两半链表 ===
    const left = sortList(head); // 左半部分排好序
    const right = sortList(mid); // 右半部分排好序
    
    // === 步骤3：合并两个有序链表 ===
    return merge(left, right);
};

/**
 * 合并两个有序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function merge(l1, l2) {
    // 创建一个哑节点（dummy），简化操作
    // curr 用来作为合并链表的“尾指针”
    const dummy = new ListNode(0);
    let curr = dummy;
    
    // 当两个链表都有节点时，逐个比较大小，接到 curr 后面
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1; // l1 更小，接到结果链表
            l1 = l1.next;   // l1 往后走
        } else {
            curr.next = l2; // l2 更小，接到结果链表
            l2 = l2.next;   // l2 往后走
        }
        curr = curr.next;   // curr 指针后移
    }
    
    // 当有一个链表走完了，直接把另一个剩下的链表接上去
    curr.next = l1 || l2;
    
    // dummy.next 就是新链表的头结点
    return dummy.next;
}
