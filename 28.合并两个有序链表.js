/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// 方法1: 迭代实现
var mergeTwoLists = function(list1, list2) {
    // 创建一个虚拟头节点，简化边界情况处理
    const dummy = new ListNode(-1);
    // 当前指针，用于构建新链表
    let current = dummy;
    
    // 当两个链表都不为空时，比较节点值
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            // 取list1的节点
            current.next = list1;
            // 移动list1指针
            list1 = list1.next;
        } else {
            // 取list2的节点
            current.next = list2;
            // 移动list2指针
            list2 = list2.next;
        }
        // 移动当前指针
        current = current.next;
    }
    
    // 处理剩余节点（其中一个链表可能还有剩余节点）
    current.next = list1 || list2;
    
    // 返回合并后的链表（跳过虚拟头节点）
    return dummy.next;
};

// 方法2: 递归实现
var mergeTwoLists = function(list1, list2) {
    // 终止条件：如果其中一个链表为空，返回另一个链表
    if (!list1) return list2;
    if (!list2) return list1;
    
    // 递归比较节点值
    if (list1.val <= list2.val) {
        // list1的节点更小，将其next指向剩余节点的合并结果
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        // list2的节点更小，将其next指向剩余节点的合并结果
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};