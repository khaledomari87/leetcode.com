// https://leetcode.com/problems/search-a-2d-matrix/solutions/5921090/simple-and-efficient/

function searchMatrix(matrix: number[][], target: number) {
    const colsLength = matrix[0].length;
    let L = 0, R = matrix.length * colsLength - 1;
    while (L <= R) {
        const M = Math.floor((L + R) / 2);
        const value = matrix[Math.floor(M / colsLength)][M % colsLength];
        if (value === target) {
            return true;
        }
        value < target ? L = M + 1 : R = M - 1;
    }
    return false;
}
