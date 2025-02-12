// https://leetcode.com/problems/count-binary-substrings/solutions/6414410/linear-scan/

function countBinarySubstrings(s: string) {
    let res = 0, prev = 0, curr = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] !== s[i]) {
            res += Math.min(prev, curr);
            [prev, curr] = [curr, 1];
        } else curr += 1;
    }
    return res + Math.min(prev, curr);
}
