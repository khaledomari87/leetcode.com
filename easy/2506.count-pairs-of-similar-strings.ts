// https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/7561275/hash-map/

function similarPairs(words: string[]) {
    const m = words.map((w) => [...new Set(w)].sort().join('')).reduce(
        (map, w) => map.set(w, (map.get(w) || 0) + 1),
        new Map<string, number>(),
    );
    return [...m.values()].reduce((a, b) => a + b * (b - 1) / 2, 0);
}
