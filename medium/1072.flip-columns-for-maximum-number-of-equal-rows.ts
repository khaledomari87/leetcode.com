// https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/solutions/6071598/simple-short-and-fastest/

function maxEqualRowsAfterFlips(matrix: (0 | 1)[][]): number {
    const map = new Map<string, number>();
    return matrix.reduce((prev, curr) => {
        const key = (curr[0] === 1 ? curr.map((v) => v ? 0 : 1) : curr).join('');
        const value = (map.get(key) || 0) + 1;
        map.set(key, value);
        return Math.max(prev, value);
    }, 0);
}
