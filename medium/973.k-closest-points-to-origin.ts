// https://leetcode.com/problems/k-closest-points-to-origin/solutions/5970324/fastest-solution-using-maxheap-time-n-log-k-space-k/

import { Heap } from '../assets/Heap.ts';

function kClosest(points: [number, number][], k: number) {
    const maxHeap = new Heap<{ dis: number; p: typeof points[number] }>((a, b) => b.dis - a.dis);

    for (const p of points) {
        maxHeap.enqueue({ p, dis: p[0] ** 2 + p[1] ** 2 });
        if (maxHeap.size > k) {
            maxHeap.dequeue();
        }
    }
    return maxHeap.toArray().map((v) => v.p);
}
