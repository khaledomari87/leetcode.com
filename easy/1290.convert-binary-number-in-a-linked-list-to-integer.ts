// https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/6840301/clean-ts-js/

import { ListNode } from '../assets/linkedlist.ts';

function getDecimalValue(head: ListNode | null) {
    let res = 0;
    while (head) {
        res = (res << 1) + head.val;
        head = head.next;
    }
    return res;
}
