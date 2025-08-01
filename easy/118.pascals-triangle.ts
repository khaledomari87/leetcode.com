// https://leetcode.com/problems/pascals-triangle/solutions/6196570/optimum-linear-solution/

function generate(numRows: number) {
    const res: number[][] = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        res[i] = new Array(i + 1);
        res[i][0] = res[i][i] = 1;
        for (let p = 1, half = (i + 1) / 2; p < half; p++) {
            res[i][p] = res[i - 1][p] + res[i - 1][p - 1]; // left
            res[i][i - p] = res[i][p]; // setting right (same value)
        }
    }
    return res;
}
