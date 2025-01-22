// https://leetcode.com/problems/01-matrix/solutions/6315614/multi-source-bfs/

function updateMatrix(mat: (0 | 1)[][]): number[][] {
    const m = mat.length, n = mat[0].length;
    const res: number[][] = new Array(m);
    for (let i = 0; i < m; i++) res[i] = new Array(n);
    const queue: [number, number, number][] = []; // row, col, distance to nearest 0
    mat.forEach((row, i) => row.forEach((binary, j) => !binary && queue.push([i, j, 0]) && (res[i][j] = 0)));
    for (let left = 0; left < queue.length; ++left) {
        [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach((dir) => {
            const r = queue[left][0] + dir[0], c = queue[left][1] + dir[1];
            if (r >= 0 && c >= 0 && r < m && c < n && res[r][c] === undefined) {
                queue.push([r, c, res[r][c] = queue[left][2] + 1]);
            }
        });
    }
    return res;
}
