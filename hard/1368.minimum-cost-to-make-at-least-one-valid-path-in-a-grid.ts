// https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/6297167/breadth-first-search/

function minCost(grid: number[][]): number {
    const offsets = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue: [number, number, number][] = [[0, 0, 0]]; // row, column, cost
    const visited = new Map<string, number>([['0,0', 0]]);
    while (queue.length) {
        const [r, c, cost] = queue.shift()!;
        if (r === grid.length - 1 && c === grid[0].length - 1) break;
        offsets.forEach(([dr, dc], dir) => {
            const nr = r + dr, nc = c + dc; // new cost
            const newCost = cost + +(dir + 1 !== grid[r][c]);
            const seen = visited.get(`${nr},${nc}`);
            if (
                nr >= 0 && nc >= 0 && nr < grid.length && nc < grid[0].length &&
                (seen === undefined || newCost < seen)
            ) {
                visited.set(`${nr},${nc}`, newCost);
                queue[dir + 1 === grid[r][c] ? 'unshift' : 'push']([nr, nc, newCost]);
            }
        });
    }
    return visited.get(`${grid.length - 1},${grid[0].length - 1}`)!;
}
