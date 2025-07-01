// https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/6903264/o-m-n/

function countNegatives(grid: number[][]) {
    const rows = grid.length, cols = grid[0].length;
    let res = 0;
    for (let r = 0, c = cols - 1; r < rows && c >= 0;) {
        grid[r][c] >= 0 ? r++ : (res += rows - r, c--);
    }
    return res;
}
