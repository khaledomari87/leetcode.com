// https://leetcode.com/problems/merge-k-sorted-lists/

import { Heap } from '../assets/Heap.ts';
import { ListNode } from '../assets/linkedlist.ts';

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const minHeap = lists.reduce((prev, node, index) => {
        node && prev.enqueue({ node, listIndex: index });
        return prev;
    }, new Heap<{ node: ListNode; listIndex: number }>((a, b) => a.node.val - b.node.val));

    let head: ListNode | null = null;
    let current: ListNode | null = head;
    while (minHeap.size > 0) {
        const { node, listIndex } = minHeap.dequeue()!;
        current ? current.next = node : head = node;
        current = node;
        node.next && minHeap.enqueue({ node: node.next, listIndex });
    }
    return head;
}
