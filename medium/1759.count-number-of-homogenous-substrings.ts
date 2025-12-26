// https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/7441627/linear-solution-constant-space/

function countHomogenous(s: string) {
    const MOD = 1e9 + 7, n = s.length;
    let res = 1;
    for (let i = 1, cnt = 1; i < n; i++) {
        if (s[i] !== s[i - 1]) cnt = 0;
        res = (res + ++cnt) % MOD;
    }
    return res;
}
