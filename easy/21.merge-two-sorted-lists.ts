class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null,
): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    const head: ListNode = list1.val < list2.val ? list1 : list2;
    let p1: ListNode | null = head; // points to the result current node
    let p2: ListNode | null = p1 === list1 ? list2 : list1; // points to the other list current node
    while (p2) {
        if (!p1.next) { // reached the end of the result, so append to the rest of the p2
            p1.next = p2;
            break;
        }
        if (p1.next.val > p2.val) { // swap: point result.next to p2, point p2 to result.next
            [p1.next, p2] = [p2, p1.next];
        } else { // result already has the minimum value, move to the next result node
            p1 = p1.next;
        }
    }
    return head;
}
