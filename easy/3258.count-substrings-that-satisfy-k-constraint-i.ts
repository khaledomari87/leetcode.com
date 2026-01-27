// https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/7529058/two-pointers/

function countKConstraintSubstrings(s: string, k: number) {
    let res = 0;
    for (let c = [0, 0], l = 0, r = 0; r < s.length; r++) {
        c[+s[r]]++;
        while (c.every((v) => v > k)) c[+s[l++]]--;
        res += r - l + 1;
    }
    return res;
}
