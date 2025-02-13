// https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/

import { Heap } from '../assets/heap.ts';

function minOperations(nums: number[], k: number) {
    const n = nums.length;
    const minHeap = new Heap<number>((a, b) => a - b, nums);
    while (minHeap.front()! < k) {
        minHeap.enqueue(minHeap.dequeue()! * 2 + minHeap.dequeue()!);
    }
    return n - minHeap.size;
}
