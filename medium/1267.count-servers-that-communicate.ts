// https://leetcode.com/problems/count-servers-that-communicate/solutions/6318065/clean-and-efficient/

function countServers(grid: (0 | 1)[][]) {
    const rc: [number, number][][] = new Array(grid.length); // Rows Counts
    const cc: [number, number][][] = new Array(grid[0].length); // Columns Counts
    for (let i = 0; i < grid.length; i++) rc[i] = [];
    for (let i = 0; i < grid[0].length; i++) cc[i] = [];

    grid.forEach((row, r) => row.forEach((b, c) => b && rc[r].push([r, c]) && cc[c].push([r, c])));

    return grid.reduce(
        (res, row, r) =>
            row.reduce((acc, cell, c) => acc + +(cell && (rc[r].length > 1 || cc[c].length > 1)), res),
        0,
    );
}
