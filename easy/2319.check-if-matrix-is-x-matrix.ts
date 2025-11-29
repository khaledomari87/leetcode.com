// https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/7382058/one-line-xor/

// deno-fmt-ignore
const checkXMatrix = (grid: number[][]) => grid.every((r, i) =>
    r.every((c, j) => +(i === j || i + j === grid.length - 1) ^ +!c));
