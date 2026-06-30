// https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/solutions/8366047/clean/

import { ListNode } from '../assets/linkedlist.ts';

const gcd = (x: number, y: number): number => x ? gcd(y % x, x) : y;

function insertGreatestCommonDivisors(head: ListNode | null) {
    for (let p = head; p?.next; p = p.next.next) {
        p.next = new ListNode(gcd(p.val, p.next.val), p.next);
    }
    return head;
}
