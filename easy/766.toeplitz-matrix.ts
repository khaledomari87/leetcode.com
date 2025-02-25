// https://leetcode.com/problems/toeplitz-matrix/solutions/6467920/greedy/

function isToeplitzMatrix(matrix: number[][]) {
    for (let i = 1, m = matrix.length, n = matrix[0].length; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
        }
    }
    return true;
}
