// https://leetcode.com/problems/find-valid-pair-of-adjacent-digits-in-string/solutions/7360866/counter/

function findValidPair(s: string) {
    const map = s.split('').reduce(
        (m, c) => (m[c] = (m[c] || 0) + 1, m),
        {} as Record<string, number>,
    );
    for (let i = 1, n = s.length; i < n; i++) {
        if (
            s[i - 1] !== s[i] &&
            [s[i - 1], s[i]].every((v) => +v === map[v])
        ) return s[i - 1] + s[i];
    }
    return '';
}
