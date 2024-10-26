// https://leetcode.com/problems/k-closest-points-to-origin/

import { Heap } from '../assets/heap.ts';

function kClosest(points: [number, number][], k: number): number[][] {
    const maxHeap = new Heap<{ dis: number; p: typeof points[number] }>((a, b) => b.dis - a.dis);

    for (const p of points) {
        maxHeap.enqueue({ p, dis: p[0] ** 2 + p[1] ** 2 });
        if (maxHeap.size > k) {
            maxHeap.dequeue();
        }
    }
    return maxHeap.toArray().map((v) => v.p);
}

console.log(...kClosest([[3, 3], [5, -1], [-2, 4]], 2));
