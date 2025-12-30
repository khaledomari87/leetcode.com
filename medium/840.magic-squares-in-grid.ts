// https://leetcode.com/problems/magic-squares-in-grid/solutions/7450619/clean-brute-foce/

function numMagicSquaresInside(grid: number[][]) {
    const dx = Array.from({ length: 3 }, (_, i) => Array.from({ length: 3 }, (_, j) => [i, j]));
    const dd = [dx.map((d, i) => d[i])];
    let res = 0;
    for (let i = 2, m = grid.length, n = grid[0].length; i < m; i++) {
        for (let j = 2; j < n; j++) {
            const arr = dx.map((d) => d.map(([x, y]) => grid[i + x - 2][j + y - 2]));
            const sum = arr[0][0] + arr[0][1] + arr[0][2]; // row1
            res += +(arr.flat().sort((a, b) => a - b).every((v, i) => v === i + 1) &&
                dx.every((d) => d.reduce((s, [x, y]) => s + arr[x][y], 0) === sum) &&
                dx.every((d) => d.reduce((s, [x, y]) => s + arr[y][x], 0) === sum) &&
                dd.every((d) => d.reduce((s, [x, y]) => s + arr[x][y], 0) === sum) &&
                dd.every((d) => d.reduce((s, [x, y]) => s + arr[2 - x][y], 0) === sum));
        }
    }
    return res;
}
