// https://leetcode.com/problems/count-special-quadruplets/solutions/8303096/brute-force/

function countQuadruplets(A: number[]) {
    let res = 0;
    for (let w = 0, n = A.length; w < n; w++) {
        for (let x = w + 1; x < n; x++) {
            for (let y = x + 1; y < n; y++) {
                for (let z = y + 1; z < n; z++) {
                    res += +(A[w] + A[x] + A[y] == A[z]);
                }
            }
        }
    }
    return res;
}
