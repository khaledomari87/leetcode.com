// https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/6932698/simulation/

function luckyNumbers(matrix: number[][]) {
    const m = matrix.length, n = matrix[0].length;
    const mins = Array.from(
        { length: m },
        (_, i) => matrix[i].reduce((a, b) => Math.min(a, b)),
    );
    const maxs = Array<number>(n).fill(-Infinity);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxs[j] = Math.max(maxs[j], matrix[i][j]);
        }
    }
    const res: number[] = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === mins[i] && matrix[i][j] === maxs[j]) {
                res.push(mins[i]);
            }
        }
    }
    return res;
}
