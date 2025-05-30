// https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/6795690/deque-bfs/

import { Deque } from 'npm:@datastructures-js/deque';

function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number) {
    const seen = new Array<boolean>(100 * (rows - 1) + cols), res: number[][] = [];
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    const deque = Deque.fromArray([[rCenter, cCenter]]);
    while (!deque.isEmpty()) {
        const [r, c] = deque.popFront();
        const index = 100 * r + c;
        if (seen[index] || r >= rows || c >= cols || r < 0 || c < 0) continue;
        seen[index] = true, res.push([r, c]);
        dirs.forEach(([dr, dc]) => deque.pushBack([r + dr, c + dc]));
    }
    return res;
}
