// https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/6215043/using-hash-table/

import type { ListNode } from '../assets/linkedlist.ts';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const seen = new Set<ListNode>();
    let pointer = headA;
    while (pointer) {
        seen.add(pointer);
        pointer = pointer.next;
    }
    pointer = headB;
    while (pointer) {
        if (seen.has(pointer)) return pointer;
        seen.add(pointer);
        pointer = pointer.next;
    }
    return null;
}
