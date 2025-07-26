// https://leetcode.com/problems/middle-of-the-linked-list/solutions/5916602/simplest-solution-slow-fast-pointers/

import { ListNode } from '../assets/linkedlist.ts';

function middleNode(head: ListNode | null): ListNode | null {
    let slow = head!;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next!;
        fast = fast.next.next;
    }
    return slow;
}
