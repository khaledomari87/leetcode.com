// https://leetcode.com/problems/kth-largest-element-in-an-array/

import { Heap } from '../assets/heap.ts';

const findKthLargest = function (nums: number[], k: number): number {
    // leetcode MinPriorityQueue is slow for some reason!
    const queue = new Heap<number>((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            queue.enqueue(nums[i]);
        } else if (nums[i] > queue.front()!) {
            queue.dequeue();
            queue.enqueue(nums[i]);
        }
    }
    return queue.front()!;
};

function findKthLargest2(nums: number[], k: number): number {
    return nums.sort((a, b) => b - a)[k - 1];
}
