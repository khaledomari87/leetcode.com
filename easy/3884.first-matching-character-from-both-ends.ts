// https://leetcode.com/problems/first-matching-character-from-both-ends/solutions/7724490/simulation/

function firstMatchingIndex(s: string) {
    for (let i = 0, n = s.length / 2; i < n; i++) {
        if (s[i] === s.at(-i - 1)!) return i;
    }
    return -1;
}
