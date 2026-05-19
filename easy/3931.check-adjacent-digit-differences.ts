// https://leetcode.com/problems/check-adjacent-digit-differences/solutions/8276920/optimal-solution/

function isAdjacentDiffAtMostTwo(s: string, maxDiff = 2) {
    const abs = Math.abs, n = s.length;
    for (let i = 1; i < n; i++) {
        if (abs(+s[i] - +s[i - 1]) > maxDiff) return false;
    }
    return true;
}

const isAdjacentDiffAtMostTwo2 = (s: string, maxDiff = 2) =>
    [...s].every((v, i, a) => !i || Math.abs(+v - +a[i - 1]) <= maxDiff);
