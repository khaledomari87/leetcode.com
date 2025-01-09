// https://leetcode.com/problems/minimum-operations-to-make-columns-strictly-increasing/solutions/6256883/optimum-solution/

function minimumOperations(grid: number[][]): number {
    let res = 0;
    for (let r = 1; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] <= grid[r - 1][c]) {
                res += grid[r - 1][c] - grid[r][c] + 1;
                grid[r][c] = grid[r - 1][c] + 1;
            }
        }
    }
    return res;
}
