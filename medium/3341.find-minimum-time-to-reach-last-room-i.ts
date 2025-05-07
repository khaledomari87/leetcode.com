// https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6722284/shortest-path-dijkstra/

import { Heap } from '../assets/Heap.ts';

function minTimeToReach(moveTime: number[][]) {
    const n = moveTime.length, m = moveTime[0].length;
    const d: number[][] = Array.from({ length: n }, () => Array(m).fill(Infinity));
    d[0][0] = 0;
    const seen: boolean[][] = Array.from({ length: n }, () => Array(m)); // [x, y]
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const q = new Heap<number[]>((a, b) => a[2] - b[2], [[0, 0, 0]]); // [x, y, dist]
    while (q.size) {
        const s = q.dequeue()!;
        if (seen[s[0]][s[1]]) continue;
        seen[s[0]][s[1]] = true;
        for (const dir of dirs) {
            const nx = s[0] + dir[0], ny = s[1] + dir[1];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                const dist = Math.max(d[s[0]][s[1]], moveTime[nx][ny]) + 1;
                if (d[nx][ny] > dist) d[nx][ny] = dist, q.enqueue([nx, ny, dist]);
            }
        }
    }
    return d.at(-1)!.at(-1)!;
}
