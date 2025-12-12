// https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/7409066/simulation/

function largestLocal(grid: number[][]) {
    const n = grid.length - 2, max = Math.max, dirs = [-1, 0, 1];
    const res: typeof grid = Array.from({ length: n }, () => new Array(n));
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            const block = grid.slice(i - 1, i + 2).map((r) => r.slice(j - 1, j + 2));
            res[i - 1][j - 1] = block.flat().reduce((a, b) => max(a, b));
        }
    }
    return res;
}
