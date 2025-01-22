// https://leetcode.com/problems/map-of-highest-peak/solutions/6313706/multi-source-bfs/

function highestPeak(mat: (0 | 1)[][]): number[][] {
    const m = mat.length, n = mat[0].length;
    const res: number[][] = new Array(m);
    for (let i = 0; i < m; i++) res[i] = new Array(n);
    let queue: [number, number][] = [];
    mat.forEach((row, i) => row.forEach((bin, j) => bin && queue.push([i, j]) && (res[i][j] = 0)));

    while (queue.length) {
        const newQ: typeof queue = [];
        for (const q of queue) {
            [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach((dir) => {
                const r = q[0] + dir[0], c = q[1] + dir[1];
                if (r >= 0 && c >= 0 && r < m && c < n && res[r][c] === undefined) {
                    res[r][c] = res[q[0]][q[1]] + 1;
                    newQ.push([r, c]);
                }
            });
        }
        queue = newQ;
    }
    return res;
}
