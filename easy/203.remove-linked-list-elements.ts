// https://leetcode.com/problems/remove-linked-list-elements/solutions/6266104/optimum-solution/

import type { ListNode } from '../assets/linkedlist.ts';

function removeElements(head: ListNode | null, val: number) {
    while (head?.val == val) head = head.next;
    for (let curr = head; curr?.next;) {
        curr.next.val === val ? curr.next = curr.next.next : curr = curr.next;
    }
    return head;
}
