// https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/7446143/sort-greedy/

function deleteGreatestValue(grid: number[][]) {
    grid.forEach((row) => row.sort((a, b) => a - b));
    const rows = grid.length, cols = grid[0].length;
    let res = 0;
    for (let c = 0, max = Math.max; c < cols; c++) {
        let mx = -Infinity;
        for (let r = 0; r < rows; r++) {
            mx = max(mx, grid[r][c]);
        }
        res += mx;
    }
    return res;
}
