// https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/6945560/two-approaches-sorting-heap/

import { PriorityQueue } from 'npm:@datastructures-js/priority-queue';

function minSubsequence(nums: number[]) {
    const maxHeap = PriorityQueue.fromArray(nums, (a, b) => b - a);
    const half = nums.reduce((a, b) => a + b) / 2;
    const res: number[] = [];
    for (let sum = 0; sum <= half; sum += res.at(-1)!) {
        res.push(maxHeap.dequeue());
    }
    return res;
}

function minSubsequenceSort(nums: number[]) {
    const half = nums.sort((a, b) => b - a)
        .reduce((a, b) => a + b) / 2;
    const res: number[] = [];
    for (let i = 0, sum = 0; sum <= half; i++) {
        res.push(nums[i]);
        sum += nums[i];
    }
    return res;
}
