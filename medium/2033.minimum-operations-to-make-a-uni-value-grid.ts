// https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/6581032/median-140-ms/

function minOperations(grid: number[][], x: number) {
    for (let rem = grid[0][0] % x, r = 0; r < grid.length; r++) {
        for (const num of grid[r]) {
            if (rem !== num % x) return -1;
        }
    }
    const { abs, floor } = Math,
        flat = grid.flat().sort((a, b) => a - b),
        median = flat[floor(flat.length / 2)],
        modX = median % x;
    let res = 0;
    for (const num of flat) {
        res += floor(abs(median - num) / x);
    }
    return res;
}
