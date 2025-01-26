// https://leetcode.com/problems/reshape-the-matrix/solutions/6332972/optimal-solution/

function matrixReshape(mat: number[][], r: number, c: number) {
    const m = mat.length, n = mat[0].length;
    if (m * n !== r * c || m === r && n === c) return mat;

    const res: number[][] = new Array(r);
    for (let i = 0; i < r; i++) res[i] = new Array(c);

    mat.forEach((row, i) => row.forEach((v, j) =>{
        const k = i * n + j;
        res[Math.floor(k / c)][k % c] = v;
    }));
    return res;
}
