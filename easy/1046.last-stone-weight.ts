// https://leetcode.com/problems/last-stone-weight/

import { Heap } from '../assets/heap.ts';

function lastStoneWeight(stones: number[]): number {
    const maxHeap = new Heap<number>((a, b) => b - a);
    stones.forEach((s) => maxHeap.enqueue(s));
    while (maxHeap.size > 1) {
        const diff = maxHeap.dequeue()! - maxHeap.dequeue()!;
        diff && maxHeap.enqueue(diff);
    }
    return maxHeap.front() || 0;
}
