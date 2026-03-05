// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/7626666/double-counting/

function minOperations(s: string) {
    let res0 = 0, res1 = 0;
    for (let i = 0, n = s.length; i < n; i++) {
        i % 2 === +s[i] ? res1++ : res0++;
    }
    return Math.min(res0, res1);
}
