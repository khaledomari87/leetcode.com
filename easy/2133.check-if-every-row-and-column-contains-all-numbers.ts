// https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/7371660/hash-set/

const checkValid = (mat: number[][], n = mat.length) =>
    mat.every((row) => new Set(row).size === n) &&
    mat.every((_, i) => new Set(mat.map((row) => row[i])).size === n);
