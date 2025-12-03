// https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/7389068/one-line/

// deno-fmt-ignore
const areSimilar = (mat: number[][], k: number) => mat.every((r, i) => r
    .every((c, j) => c === mat[i][(j + mat[0].length + k) % mat[0].length]));
