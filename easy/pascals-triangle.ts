// https://leetcode.com/problems/pascals-triangle/solutions/6196570/optimum-linear-solution/

function generate(numRows: number): number[][] {
    const res = new Array<number[]>(numRows);
    for (let i = 0; i < numRows; i++) {
        res[i] = new Array(i + 1); // initialize array length
        res[i][0] = res[i][i] = 1; // set left and right elements
        for (let p = 1; p < (i + 1) / 2; p++) {
            res[i][p] = res[i - 1][p] + res[i - 1][p - 1]; // setting left
            res[i][i - p] = res[i][p]; // setting right (same value)
        }
    }
    return res;
}
