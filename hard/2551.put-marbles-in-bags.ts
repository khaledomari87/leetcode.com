// https://leetcode.com/problems/put-marbles-in-bags/solutions/6598266/sort-and-greedy/

import { Heap } from '../assets/Heap.ts';

function putMarbles(weights: number[], k: number) {
    const paris = new Array<number>(weights.length - 1);
    for (let i = 0; i < weights.length - 1; i++) {
        paris[i] = weights[i] + weights[i + 1];
    }
    paris.sort((a, b) => a - b);
    let res = 0;
    for (let i = 0; i < k - 1; i++) {
        res += paris.at(-i - 1)! - paris[i];
    }
    return res;
}

function putMarblesHeap(weights: number[], k: number): number {
    const pairSums = new Array<number>(weights.length - 1);
    for (let i = 0; i < weights.length - 1; i++) {
        pairSums[i] = weights[i] + weights[i + 1];
    }
    const minHeap = new Heap((a, b) => a - b, [...pairSums]);
    const maxHeap = new Heap((a, b) => b - a, pairSums);
    [minHeap, maxHeap].forEach((heap) => {
        while (heap.size > k - 1) heap.dequeue();
    });
    return (
        minHeap.toArray().reduce((a, b) => a + b, 0) -
        maxHeap.toArray().reduce((a, b) => a + b, 0)
    );
}
