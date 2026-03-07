// https://leetcode.com/problems/flip-square-submatrix-vertically/solutions/7633065/in-place/

function reverseSubmatrix(grid: number[][], x: number, y: number, k: number) {
    for (let k2 = k >> 1, i = 0; i < k2; i++) {
        for (let j = 0; j < k; j++) {
            [grid[i + x][j + y], grid[x + k - i - 1][j + y]] = [
                grid[x + k - i - 1][j + y],
                grid[i + x][j + y],
            ];
        }
    }
    return grid;
}
