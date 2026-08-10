// https://leetcode.com/problems/count-valid-prefixes/solutions/8451552/one-pass-counter/

function countValidPrefixes(s: string) {
    let res = 0, ones = 0, zeros = 0;
    for (const b of s) {
        b === '1' ? ones++ : zeros++;
        if (Math.abs(ones - zeros) < 2) res++;
    }
    return res;
}
