// https://leetcode.com/problems/count-servers-that-communicate/solutions/6318065/clean-and-efficient/

function countServers(grid: (0 | 1)[][]) {
    const rc: number[] = new Array(grid.length).fill(0); // Rows Counts
    const cc: number[] = new Array(grid[0].length).fill(0); // Columns Counts
    grid.forEach((row, r) => row.forEach((b, c) => b && ++rc[r] && ++cc[c]));
    return grid.reduce(
        (res, r, i) => r.reduce((acc, v, j) => acc + +(v && (rc[i] > 1 || cc[j] > 1)), res),
        0,
    );
}
