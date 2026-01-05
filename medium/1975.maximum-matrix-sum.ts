// https://leetcode.com/problems/maximum-matrix-sum/solutions/7467726/greedy-constant-space/

function maxMatrixSum(mat: number[][]) {
    const { min, abs } = Math;
    const sum = mat.reduce((s, r) => r.reduce((a, b) => a + abs(b), s), 0);
    const mn = mat.reduce((m, r) => r.reduce((a, b) => min(a, abs(b)), m), Infinity);
    const cnt = mat.reduce((c, r) => r.reduce((a, b) => a + +(b < 0), c), 0);
    return sum - 2 * mn * (cnt % 2);
}
