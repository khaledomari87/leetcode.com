// https://leetcode.com/problems/equal-sum-grid-partition-i/solutions/7690872/constant-space-prefix-sum/

function canPartitionGrid(grid: number[][]) {
    const half = grid.reduce((t, r) => t + r.reduce((a, b) => a + b, 0), 0) / 2;
    if (half % 1 === 0) {
        const m = grid.length, n = grid[0].length;
        for (let sum = 0, i = 0; i < m; i++) {
            sum += grid[i].reduce((a, b) => a + b, 0);
            if (sum === half) return true;
        }
        for (let j = 0, sum = 0; j < n; j++) {
            for (let i = 0; i < m; i++) sum += grid[i][j];
            if (sum === half) return true;
        }
    }
    return false;
}
