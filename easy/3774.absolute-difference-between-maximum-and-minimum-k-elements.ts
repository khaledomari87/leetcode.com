// https://leetcode.com/problems/absolute-difference-between-maximum-and-minimum-k-elements/solutions/7613018/two-approaches-sorting-priority-queues/

import { MaxPriorityQueue, MinPriorityQueue } from '@datastructures-js/priority-queue';

function absDifference(nums: number[], k: number) {
    const minHeap = MinPriorityQueue.fromArray([...nums]);
    const maxHeap = MaxPriorityQueue.fromArray([...nums]);
    let res = 0;
    for (let i = 0; i < k; i++) {
        res += maxHeap.dequeue()! - minHeap.dequeue()!;
    }
    return res;
}

const absDifferenceSort = (nums: number[], k: number) =>
    nums.sort((a, b) => a - b).slice(-k).reduce((a, b) => a + b) -
    nums.slice(0, k).reduce((a, b) => a + b);
