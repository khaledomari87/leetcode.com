// https://leetcode.com/problems/largest-3-same-digit-number-in-string/solutions/7079219/clean-solution/

function largestGoodInteger(s: string) {
    let res = -1;
    for (let i = 2, n = s.length; i < n; i++) {
        if (s[i] === s[i - 1] && s[i] === s[i - 2]) {
            res = Math.max(res, +s[i]);
        }
    }
    return res === -1 ? '' : String(res).repeat(3);
}
