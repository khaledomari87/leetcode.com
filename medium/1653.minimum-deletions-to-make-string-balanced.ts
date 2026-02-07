// https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/7560082/constant-space-dp/

function minimumDeletions(s: string) {
    let res = 0;
    for (let i = 0, b = 0; i < s.length; i++) {
        s[i] === 'b' ? b++ : res = Math.min(res + 1, b);
    }
    return res;
}
