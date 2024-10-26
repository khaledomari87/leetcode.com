// https://leetcode.com/problems/kth-largest-element-in-an-array/

import { Heap } from '../assets/heap.ts';

const findKthLargest = function (nums: number[], k: number): number {
    // leetcode MinPriorityQueue is slow for some reason!
    const minHeap = new Heap<number>((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            minHeap.enqueue(nums[i]);
        } else if (nums[i] > minHeap.front()!) {
            minHeap.dequeue();
            minHeap.enqueue(nums[i]);
        }
    }
    return minHeap.front()!;
};

function findKthLargest2(nums: number[], k: number): number {
    return nums.sort((a, b) => b - a)[k - 1];
}
