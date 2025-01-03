// https://leetcode.com/problems/swap-nodes-in-pairs/solutions/6225155/two-lines-recursion/

import type { ListNode } from '../assets/linkedlist.ts';

function swapPairs(head: ListNode | null): ListNode | null {
    const nxt = head?.next;
    return nxt && ([head.next, nxt.next] = [swapPairs(nxt.next), head]) && nxt || head;
}
