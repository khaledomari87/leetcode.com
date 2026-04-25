// https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/8096882/two-approaches-string-math/

const { floor: fl, log10: lg, abs, max } = Math;
const findColumnWidth = (grid: number[][]) =>
    Array.from({ length: grid[0].length }, (_, j) => {
        let res = 0;
        for (let i = 0; i < grid.length; i++) {
            // res = Math.max(res, String(grid[i][j]).length);
            res = max(res, fl(lg(abs(grid[i][j] || 1))) + 1 + +(grid[i][j] < 0));
        }
        return res;
    });
