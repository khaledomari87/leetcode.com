// https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/6581032/median-140-ms/

function minOperations(grid: number[][], x: number) {
    for (let rem = grid[0][0] % x, r = 0; r < grid.length; r++) {
        for (const num of grid[r]) {
            if (rem !== num % x) return -1;
        }
    }
    const flat = grid.flat().sort((a, b) => a - b);
    const median = flat[flat.length >>> 1];
    return flat.reduce((r, v) => r + Math.floor(Math.abs(median - v) / x), 0);
}
