// https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/solutions/7669773/iterative-3-lines/

function minimumPushes(w: string) {
    let res = 0, n = w.length + 8, i = 1;
    while (n > 8) res += i++ * Math.min(8, n -= 8);
    return res;
}
