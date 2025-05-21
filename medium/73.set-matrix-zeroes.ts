// https://leetcode.com/problems/set-matrix-zeroes/solutions/6765757/arrays-and-hash-sets/

function setZeroes(matrix: number[][]) {
    const m = matrix.length, n = matrix[0].length;
    const rSet = new Set<number>(), cSet = new Set<number>();
    outer: for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (!matrix[r][c]) rSet.add(r), cSet.add(c);
            if (rSet.size === m && cSet.size === n) break outer;
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (rSet.has(r) || cSet.has(c)) matrix[r][c] = 0;
        }
    }
}

function setZeroesArray(matrix: number[][]) {
    const m = matrix.length, n = matrix[0].length;
    const rSet = Array<boolean>(201), cSet = Array<boolean>(201);
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (!matrix[r][c]) rSet[r] = cSet[c] = true;
        }
    }
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (rSet[r] || cSet[c]) matrix[r][c] = 0;
        }
    }
}
