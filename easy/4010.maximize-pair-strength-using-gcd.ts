// https://leetcode.com/problems/maximize-pair-strength-using-gcd/solutions/8449422/brute-force/

function maxPairStrength(A: number[]) {
    const gcd = (x: number, y: number): number => !y ? x : gcd(y, x % y);
    const n = A.length, max = Math.max;
    let res = -Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            res = max(res, A[i] * A[j] / gcd(A[i], A[j]) ** 2);
        }
    }
    return res;
}
