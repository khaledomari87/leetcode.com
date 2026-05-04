// https://leetcode.com/problems/rotate-image/solutions/8136460/transpose-then-horizontal-reflection/

function rotate(matrix: number[][]) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) { // for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n / 2; j++) {
            [matrix[i][j], matrix[i][n - j - 1]] = [matrix[i][n - j - 1], matrix[i][j]];
        }
    }
}
