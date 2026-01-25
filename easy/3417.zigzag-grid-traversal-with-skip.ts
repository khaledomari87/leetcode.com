// https://leetcode.com/problems/zigzag-grid-traversal-with-skip/solutions/7524545/constant-space-single-loop/

function zigzagTraversal(grid: number[][]) {
    const res: number[] = [];
    const m = grid.length, n = grid[0].length;
    for (let i = 0; i < m * n; i += 2) {
        const r = Math.floor(i / n), c = i % n;
        res.push(grid[r][r % 2 ? n - c - 1 : c]);
    }
    return res;
}
