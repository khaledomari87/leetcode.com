// https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/7092787/prefix-sum/

function numSpecial(mat: number[][]) {
    const m = mat.length, n = mat[0].length;
    const rows = new Array<number>(m).fill(0);
    const cols = new Array<number>(n).fill(0);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            rows[r] += mat[r][c];
            cols[c] += mat[r][c];
        }
    }
    let res = 0;
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            res += +(mat[r][c] && rows[r] + cols[c] === 2);
        }
    }
    return res;
}
