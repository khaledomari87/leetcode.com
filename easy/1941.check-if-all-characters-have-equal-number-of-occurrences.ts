// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/7446103/hash-map/

function areOccurrencesEqual(s: string) {
    const freq = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        freq.set(s[i], (freq.get(s[i]) || 0) + 1);
    }
    return new Set(freq.values()).size === 1;
}

// deno-fmt-ignore
const areOccurrencesEqualOneLine = (s: string) =>
    new Set(s.split('').reduce((m, c) => m.set(c, (m.get(c) || 0) + 1),
        new Map<string, number>()).values()).size === 1;
