// https://leetcode.com/problems/check-if-digits-are-equal-in-string-after-operations-i/solutions/7294481/simulation-o-n-2/

function hasSameDigits(s: string) {
    const res = s.split('').map((num) => +num);
    while (res.length > 2) {
        for (let i = 0, curr = res[0], n = res.length - 1; i < n; curr = res[i++ + 1]) {
            res[i] = (curr + res[i + 1]) % 10;
        }
        res.pop();
    }
    return res[0] === res[1];
}
