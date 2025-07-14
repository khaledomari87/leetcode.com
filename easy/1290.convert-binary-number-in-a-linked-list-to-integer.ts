// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/6840301/two-approaches/

import { ListNode } from '../assets/linkedlist.ts';

function getDecimalValue(head: ListNode | null) {
    let res = 0;
    while (head) {
        res = (res << 1) + head.val;
        head = head.next;
    }
    return res;
}

function getDecimalValueString(head: ListNode | null) {
    const res: number[] = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return parseInt(res.join(''), 2);
}
