// https://leetcode.com/problems/snakes-and-ladders/solutions/6797836/bfs/

import { Deque } from 'npm:@datastructures-js/deque';

function snakesAndLadders(board: number[][]) {
    const size = board.length, target = size * size;
    const steps = new Array<number>(target + 1).fill(-1);
    const queue = Deque.fromArray([1]);
    steps[1] = 0;

    while (!queue.isEmpty()) {
        const curr = queue.popFront();
        for (let i = curr + 1; i <= Math.min(curr + 6, target); i++) {
            const rowIdx = Math.floor((i - 1) / size);
            const colIdx = (i - 1) % size;
            const row = size - 1 - rowIdx;
            const col = rowIdx % 2 ? size - 1 - colIdx : colIdx;

            const jump = board[row][col];
            const dest = jump > 0 ? jump : i;

            if (dest === target) return steps[curr] + 1;

            if (steps[dest] === -1) {
                steps[dest] = steps[curr] + 1;
                queue.pushBack(dest);
            }
        }
    }
    return -1;
}
