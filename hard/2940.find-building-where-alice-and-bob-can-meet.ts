// https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/6174222/minimum-heap-by-khaled-alomari-3x9z/

import { Heap } from '../assets/Heap.ts';

function leftmostBuildingQueries(heights: number[], queries: [number, number][]): number[] {
    const output = new Array<number>(queries.length).fill(-1);
    // Assume Alice is always to left of Bob
    const missed = new Map<number, typeof queries[number][]>(); // BobIndex => [maxHeight(Alice, Bob), queryIndex][]
    queries.forEach((q, i) => {
        const [L, R] = q.sort((a, b) => a - b);
        if (L === R || heights[L] < heights[R]) {
            output[i] = R;
        } else {
            const element: typeof queries[number] = [Math.max(heights[L], heights[R]), i];
            missed.get(R)?.push(element) || missed.set(R, [element]);
        }
    });
    const minHeap = new Heap<[number, number]>((a, b) => a[0] - b[0]); // a, b = [maxHeight(Alice, Bob), queryIndex]
    heights.forEach((h, i) => {
        for (const [maxHeight, queryIndex] of (missed.get(i) || [])) {
            minHeap.enqueue([maxHeight, queryIndex]);
        }
        while (minHeap.size > 0 && minHeap.front()![0] < h) {
            const queryIndex = minHeap.dequeue()![1];
            output[queryIndex] = i;
        }
    });
    return output;
}

function leftmostBuildingQueries_n2(heights: number[], queries: [number, number][]): number[] {
    const output: number[] = [];
    for (const q of queries) { // O(q)
        q.sort((a, b) => a - b); // O(2)
        if (q[0] === q[1] || heights[q[0]] < heights[q[1]]) {
            output.push(q[1]);
        } else {
            let leftMost = -1;
            for (let i = q[1] + 1, maxH = Math.max(heights[q[0]], heights[q[1]]); i < heights.length; i++) { // O(h)
                if (heights[i] > maxH) {
                    leftMost = i;
                    break;
                }
            }
            output.push(leftMost);
        }
    }
    return output;
}
