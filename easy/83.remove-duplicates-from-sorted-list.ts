// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let curr = head;
    while (curr) {
        if (curr.val === curr.next?.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
    }
    return head;
}
