// https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/7349892/enumeration-editorial/

function numberOfSubstrings(s: string) {
    const n = s.length, pre: number[] = new Array(n + 1);
    pre[0] = -1;
    for (let i = 0; i < n; i++) {
        pre[i + 1] = !i || i > 0 && s[i - 1] === '0' ? i : pre[i];
    }
    let res = 0;
    for (let i = 1, min = Math.min; i <= n; i++) {
        for (let j = i, c0 = +!+s[i - 1]; j > 0 && c0 * c0 <= n; j = pre[j], c0++) {
            const c1 = i - pre[j] - c0;
            if (c0 * c0 <= c1) res += min(j - pre[j], c1 - c0 * c0 + 1);
        }
    }
    return res;
}
