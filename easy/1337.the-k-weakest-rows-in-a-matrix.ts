// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/6888483/sort-3-lines/

// deno-fmt-ignore-file

const kWeakestRows = (mat: number[][], k: number) => mat
    .map((r, i) => [r.reduce((a, b) => a + b), i]) // [sum, index]
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]) // lowest sum || lowest index
    .slice(0, k).map((v) => v[1]) // return indices only
;
