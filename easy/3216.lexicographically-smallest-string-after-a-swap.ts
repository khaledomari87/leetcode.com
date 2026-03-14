// https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/7647481/greedy/

function getSmallestString(s: string) {
    for (let i = 0, n = s.length - 1; i < n; i++) {
        if (+s[i] % 2 === +s[i + 1] % 2 && s[i + 1] < s[i]) {
            return s.substring(0, i) + s[i + 1] + s[i] + s.substring(i + 2);
        }
    }
    return s;
}
