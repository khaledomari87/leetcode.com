// https://leetcode.com/problems/modify-the-matrix/solutions/7664962/dynamic-programming/

function modifiedMatrix(mat: number[][]) {
    const m = mat.length, n = mat[0].length;
    const dp = Array.from({ length: n }, (_, j) => {
        let res = 0;
        for (let max = Math.max, i = 0; i < m; i++) {
            res = max(res, mat[i][j]);
        }
        return res;
    });
    return mat.map((r) => r.map((v, j) => v === -1 ? dp[j] : v));
}
