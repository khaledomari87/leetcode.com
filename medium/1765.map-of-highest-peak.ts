// https://leetcode.com/problems/map-of-highest-peak/solutions/6313706/multi-source-bfs/

function highestPeak(mat: (0 | 1)[][]): number[][] {
    const m = mat.length, n = mat[0].length;
    const res: number[][] = new Array(m);
    for (let i = 0; i < m; i++) res[i] = new Array(n).fill(-1);
    const queue: [number, number][] = [];
    mat.forEach((row, i) => row.forEach((bin, j) => bin && queue.push([i, j]) && (res[i][j] = 0)));
    for (let left = 0; left < queue.length; ++left) {
        [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach((dir) => {
            const r = queue[left][0] + dir[0], c = queue[left][1] + dir[1];
            if (res[r]?.[c] === -1) {
                res[r][c] = res[queue[left][0]][queue[left][1]] + 1;
                queue.push([r, c]);
            }
        });
    }
    return res;
}
