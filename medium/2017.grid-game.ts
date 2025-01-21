// https://leetcode.com/problems/grid-game/solutions/6309324/linear-solution/

function gridGame(grid: number[][]) {
    let row1 = grid[0].reduce((a, b) => a + b, 0), row2 = 0;
    return grid[0].reduce((res, val, i) => {
        res = Math.min(res, Math.max(row1 -= val, row2));
        row2 += grid[1][i];
        return res;
    }, Number.MAX_SAFE_INTEGER);
}
