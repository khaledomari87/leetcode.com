// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/8333039/linear-solution-using-stack/

import { ListNode } from '../assets/linkedlist.ts';

function pairSum(head: ListNode | null) {
    let res = 0, l = 0;
    for (let p = head; p; p = p.next) l++;
    const stack: number[] = [];
    for (let p = head, h = l / 2, i = 0, max = Math.max; p; p = p.next) {
        if (i < h) stack.push(p.val), i++;
        else res = max(res, p.val + stack.pop()!);
    }
    return res;
}
