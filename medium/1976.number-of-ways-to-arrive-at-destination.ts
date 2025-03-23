// https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/solutions/6569388/dijkstra-s-algorithm-with-a-min-heap/

import { Heap } from '../assets/Heap.ts';

function countPaths(n: number, roads: [number, number, number][]) {
    const MOD = 1e9 + 7;
    const graph: [number, number][][] = Array.from({ length: n }, () => []);
    for (const [a, b, time] of roads) {
        graph[a].push([b, time]);
        graph[b].push([a, time]);
    }

    const minDist = new Array(n).fill(Infinity), ways = new Array(n).fill(0);
    minDist[0] = 0, ways[0] = 1;
    const minHeap = new Heap<[number, number]>((a, b) => a[0] - b[0], [[0, 0]])
    while (minHeap.size) {
        const [dist, node] = minHeap.dequeue()!;
        if (dist > minDist[node]) continue;
        for (const [neighbor, time] of graph[node]) {
            const newDist = dist + time;
            if (newDist < minDist[neighbor]) {
                minDist[neighbor] = newDist;
                ways[neighbor] = ways[node];
                minHeap.enqueue([newDist, neighbor]);
            } else if (newDist === minDist[neighbor]) {
                ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
            }
        }
    }
    return ways[n - 1];
}
