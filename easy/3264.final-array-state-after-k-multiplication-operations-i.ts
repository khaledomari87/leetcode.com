// https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/6152994/optimum-solution-using-minimum-heap-o-n-k-log-n/

import { Heap } from '../assets/Heap.ts';

function getFinalState(nums: number[], k: number, m: number): number[] {
    // [value in nums, index in nums]
    const minHeap = new Heap<[number, number]>((a, b) => a[0] - b[0] || a[1] - b[1]);
    nums.forEach((value, index) => minHeap.enqueue([value, index]));
    while (k-- > 0) {
        const item = minHeap.dequeue()!;
        nums[item[1]] = item[0] * m;
        minHeap.enqueue([nums[item[1]], item[1]]);
    }
    return nums;
}
