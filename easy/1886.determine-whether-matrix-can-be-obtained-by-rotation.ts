// https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/7538966/constant-space-by-khaled-alomari-4loe/

// deno-fmt-ignore
const findRotation = (mat: number[][], tar: number[][]) =>
    Array.from({ length: 4 }).some(() =>
        mat.every((r, i) => r.every((v, j) =>
            v === tar[i][j])) ? true : rotate90(mat));

function rotate90(mat: number[][]) {
    for (let n = mat.length, i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
        }
    }
    for (const row of mat) row.reverse();
}
