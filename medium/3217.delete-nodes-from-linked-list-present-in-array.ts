// https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/7317640/simplest-version/

import { ListNode } from '../assets/linkedlist.ts';

function modifiedList(nums: number[], head: ListNode | null) {
    const dummy = new ListNode(0, head);
    for (
        let p = dummy, s = new Set(nums);
        p.next;
        s.has(p.next.val) ? p.next = p.next.next : p = p.next
    );
    return dummy.next;
}
