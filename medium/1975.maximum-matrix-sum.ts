// https://leetcode.com/problems/maximum-matrix-sum/solutions/6079197/optimum-solution/

function maxMatrixSum(matrix: number[][]): number {
    let sum = 0;
    let min = Number.POSITIVE_INFINITY;
    let count = 0;
    matrix.forEach((row) =>
        row.forEach((num) => {
            num < 0 && count++;
            const abs = Math.abs(num);
            sum += abs;
            min = Math.min(min, abs);
        })
    );
    return sum - 2 * min * (count % 2);
}
