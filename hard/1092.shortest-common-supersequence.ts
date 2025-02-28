// https://leetcode.com/problems/shortest-common-supersequence/solutions/6476901/dynamic-programming/

function shortestCommonSupersequence(s1: string, s2: string) {
    let rLen = s1.length, cLen = s2.length;
    const dp = Array.from({ length: rLen + 1 }, () => Array<number>(cLen + 1));
    for (let r = 0; r <= rLen; r++) dp[r][0] = r;
    for (let c = 0; c <= cLen; c++) dp[0][c] = c;
    for (let r = 1; r <= rLen; r++) {
        for (let c = 1; c <= cLen; c++) {
            if (s1[r - 1] === s2[c - 1]) dp[r][c] = dp[r - 1][c - 1] + 1;
            else dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + 1;
        }
    }
    const res: string[] = [];
    while (rLen > 0 && cLen > 0) {
        if (s1[rLen - 1] === s2[cLen - 1]) {
            res.push(s1[rLen-- - 1]);
            cLen--;
        } else if (dp[rLen - 1][cLen] < dp[rLen][cLen - 1]) res.push(s1[rLen-- - 1]);
        else res.push(s2[cLen-- - 1]);
    }
    while (rLen > 0) res.push(s1[rLen-- - 1]);
    while (cLen > 0) res.push(s2[cLen-- - 1]);
    return res.reverse().join('');
}
