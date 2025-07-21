// https://leetcode.com/problems/matrix-diagonal-sum/solutions/6987828/simple/

function diagonalSum(mat: number[][]) {
    let res = 0;
    const n = mat.length, mid = n >> 1;
    for (let i = 0; i < n; i++) {
        res += mat[i][i] + mat.at(-i - 1)![i];
    }
    return res - n % 2 * mat[mid][mid];
}
