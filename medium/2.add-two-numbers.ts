// https://leetcode.com/problems/add-two-numbers/solutions/6224469/two-pointers-solution-without-recursion/

import { ListNode } from '../assets/linkedlist.ts';

function addTwoNumbers(l1: ListNode, l2: ListNode) {
    const res = new ListNode();
    let pr = res, carry = 0;
    let p1: ListNode | null = l1, p2: ListNode | null = l2;
    while (p1 || p2) {
        let sum = (p1?.val || 0) + (p2?.val || 0) + carry;
        carry = +(sum > 9), sum %= 10;
        pr.val = sum;

        p1 && (p1 = p1.next);
        p2 && (p2 = p2.next);
        if (p1 || p2 || carry) {
            pr.next = new ListNode();
            pr = pr.next;
        }
    }
    carry && (pr.val = carry);
    return res;
}
