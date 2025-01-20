// https://leetcode.com/problems/first-completely-painted-row-or-column/solutions/6305083/linear-time-and-space/

function firstCompleteIndex(arr: number[], mat: number[][]) {
    const n = mat.length, m = mat[0].length;
    const rc = new Array<number>(n).fill(0); // Rows Counts
    const cc = new Array<number>(m).fill(0); // Columns Counts
    const pos = new Array<[number, number]>(n * m); // Positions Map
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
            pos[mat[r][c] - 1] = [r, c];
        }
    }
    for (let a = 0; a < arr.length; a++) {
        if (++rc[pos[arr[a] - 1][0]] === m || ++cc[pos[arr[a] - 1][1]] === n) return a;
    }
    throw new Error('Invalid Input!');
}
