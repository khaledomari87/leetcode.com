// https://leetcode.com/problems/last-stone-weight/

import { Heap } from '../assets/heap.ts';

function lastStoneWeight(stones: number[]): number {
    const queue = new Heap<number>((a, b) => b - a);
    stones.forEach((s) => queue.enqueue(s));
    while (queue.size > 1) {
        const diff = queue.dequeue() - queue.dequeue();
        diff && queue.enqueue(diff);
    }
    return queue.front() || 0;
}
