// https://leetcode.com/problems/island-perimeter/solutions/6295781/iterative-approach/

function islandPerimeter(grid: (0 | 1)[][]): number {
    return grid.reduce((res, row, r) =>
        row.reduce((res, cell, c) => {
            if (cell) {
                res += +(c <= 0 || row[c - 1] === 0) +
                    +(c >= row.length - 1 || row[c + 1] === 0) +
                    +(r <= 0 || grid[r - 1][c] === 0) +
                    +(r >= grid.length - 1 || grid[r + 1][c] === 0);
            }
            return res;
        }, res), 0);
}
