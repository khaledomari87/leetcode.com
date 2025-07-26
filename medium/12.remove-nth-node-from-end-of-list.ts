// https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/5917623/efficient-and-typescript-friendly/

import { ListNode } from '../assets/linkedlist.ts';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let right = head;
    let left: typeof head = null;
    let count = 0;
    while (right?.next) {
        right = right.next;
        if (count > n - 2) {
            left = left && left.next || head;
        } else {
            count++;
        }
    }
    if (!left) {
        return head?.next || null;
    }
    left.next = left.next?.next || null;
    return head;
}
