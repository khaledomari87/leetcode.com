// https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/6430536/min-heap/

import { Heap } from '../assets/Heap.ts';

class KthLargest {
    private k: number;
    private minHeap: Heap<number> = new Heap<number>((a, b) => a - b);
    constructor(k: number, nums: number[]) {
        this.k = k;
        nums.forEach((num) => this.add(num));
    }
    add(num: number) {
        this.minHeap.enqueue(num);
        if (this.minHeap.size > this.k) this.minHeap.dequeue();
        return this.minHeap.front()!;
    }
}
