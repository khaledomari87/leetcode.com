// https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/6589173/min-heap-220ms/

import { Heap } from '../assets/Heap.ts';

function maxPoints(grid: number[][], queries: number[]) {
    const m = grid.length, n = grid[0].length;
    const sorted = queries.map((num, idx) => [num, idx]).sort((a, b) => a[0] - b[0]);
    const heap = new Heap((a, b) => a[0] - b[0], [[grid[0][0], 0, 0]]);
    const seen = Array.from({ length: m }, () => new Array<boolean>(n));
    seen[0][0] = true;

    let count = 0;
    const res = new Array<number>(queries.length);
    const offsets = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    for (const [limit, index] of sorted) {
        while (heap.size > 0 && heap.front()![0] < limit) {
            const [, r, c] = heap.dequeue()!;
            count++;
            for (const [offsetRow, offsetCol] of offsets) {
                const nr = r + offsetRow, nc = c + offsetCol;
                if (nr < m && nc < n && nr >= 0 && nc >= 0 && !seen[nr][nc]) {
                    heap.enqueue([grid[nr][nc], nr, nc]);
                    seen[nr][nc] = true;
                }
            }
        }
        res[index] = count;
    }
    return res;
}
