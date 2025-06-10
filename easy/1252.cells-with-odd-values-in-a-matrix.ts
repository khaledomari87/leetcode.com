// https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/solutions/6828864/xor/

function oddCells(m: number, n: number, indices: number[][]) {
    const [rows, cols] = [n, m].map((s) => new Array<number>(s).fill(0));

    indices.forEach(([i, j]) => (rows[i] ^= 1, cols[j] ^= 1));

    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res += +((rows[i] ^ cols[j]) === 1);
        }
    }
    return res;
}
