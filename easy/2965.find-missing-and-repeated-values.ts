// https://leetcode.com/problems/find-missing-and-repeated-values/solutions/6190671/math-and-map/

function findMissingAndRepeatedValues(grid: number[][]) {
    const n = grid.length, size = n ** 2, seen = new Array<boolean>(size);
    let missing = size * (size + 1) / 2, repeated = Number.NaN;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (seen[grid[i][j] - 1]) {
                repeated = grid[i][j];
            } else {
                seen[grid[i][j] - 1] = true;
                missing -= grid[i][j];
            }
        }
    }
    return [repeated, missing];
}
