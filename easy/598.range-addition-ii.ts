// https://leetcode.com/problems/range-addition-ii/solutions/6349873/optimal-solution-constant-space/

function maxCount(m: number, n: number, ops: [number, number][]) {
    ops.forEach((i) => (m = Math.min(m, i[0]), n = Math.min(n, i[1])));
    return m * n;
}

const maxCountOneLine = (m: number, n: number, ops: [number, number][]) =>
    ops.reduce((r, i) => [Math.min(r[0], i[0]), Math.min(r[1], i[1])], [m, n]).reduce((x, y) => x * y);
