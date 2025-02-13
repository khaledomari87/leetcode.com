// https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6138611/max-heap/

import { Heap } from '../assets/Heap.ts';

function pickGifts(gifts: number[], k: number): number {
    const maxHeap = new Heap<number>((a, b) => b - a);
    for (const g of gifts) {
        maxHeap.enqueue(g);
    }
    for (let i = 0; i < k; i++) {
        maxHeap.enqueue(Math.floor(Math.sqrt(maxHeap.dequeue()!)));
    }
    return maxHeap.toArray().reduce((p, c) => p + c);
}
