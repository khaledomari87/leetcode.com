export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    toArray() {
        const arr = [];
        let curr: ListNode | null = new ListNode(this.val, this.next);
        while (curr) {
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr;
    }
}
