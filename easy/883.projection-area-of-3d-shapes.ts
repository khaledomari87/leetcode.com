// https://leetcode.com/problems/projection-area-of-3d-shapes/solutions/6616507/functional-programming/

function projectionArea(grid: number[][]): number {
    let ans = grid.reduce((sum, row) => sum + Math.max(...row), 0);
    ans += grid[0].map((_, col) => Math.max(...grid.map((row) => row[col]))).reduce((a, b) => a + b);
    ans += grid.flat().reduce((sum, v) => sum + +(v > 0), 0);
    return ans;
}
