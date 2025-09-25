// https://leetcode.com/problems/triangle/solutions/7221842/bottom-up/

function minimumTotal(mat: number[][]) {
    // const tmp = Array.from({ length: mat.length }, (_, i) => [...mat[i]])
    for (let i = mat.length - 2, min = Math.min; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            mat[i][j] += min(mat[i + 1][j], mat[i + 1][j + 1]);
        }
    }
    return mat[0][0];
}
