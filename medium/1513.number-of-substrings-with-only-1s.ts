// https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/7351457/short-clean/

function numSub(s: string, MOD = 1e9 + 7) {
    let cnt = 0, res = 0;
    for (const c of s) {
        cnt = +c * (cnt + +c);
        res = (res + cnt) % MOD;
    }
    return res;
}
