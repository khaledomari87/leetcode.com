// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/7287582/one-line/

// deno-fmt-ignore
const finalValueAfterOperations = (ops: string[]) =>
    ops.reduce((r, v) => r + +`${v[1]}1`, 0);
// ops.reduce((r, v) => r + (v.includes('+') ? 1 : -1), 0);
// ops.reduce((r, v) => r + +v.includes('+') + -v.includes('-'), 0);
