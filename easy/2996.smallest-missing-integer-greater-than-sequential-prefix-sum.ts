// https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/7678790/linear-solution/

function missingInteger(A: number[]) {
    let s = A[0];
    for (let i = 1; i < A.length && A[i - 1] + 1 === A[i]; i++) s += A[i];
    for (let i = s, B = new Set(A); true; i++) if (!B.has(i)) return i;
}
