// https://leetcode.com/problems/find-champion-i/solutions/7680526/bit-manipulation/

function findChampion(grid: number[][]) {
    const res = new Array(grid.length).fill(0);
    grid.forEach((row) => row.forEach((b, i) => res[i] |= b));
    return res.indexOf(0);
}
