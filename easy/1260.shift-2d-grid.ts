// https://leetcode.com/problems/shift-2d-grid/solutions/6828922/without-extra-space/

function shiftGrid(grid: number[][], k: number) {
    const m = grid.length, n = grid[0].length, size = m * n;
    const res: typeof grid = Array.from({ length: m }, () => new Array(n));
    grid.forEach((row, i) =>
        row.forEach((num, j) => {
            const flatIndex = ((i * n + j) + k) % size;
            res[Math.floor(flatIndex / n)][flatIndex % n] = num;
        })
    );
    return res;
}
