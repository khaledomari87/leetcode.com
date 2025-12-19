// https://leetcode.com/problems/rings-and-rods/solutions/7424804/10-sets/

function countPoints(rings: string) {
    const sets = Array.from({ length: 10 }, () => new Set<string>());
    for (let i = 0, n = rings.length; i < n; i += 2) {
        sets[+rings[i + 1]].add(rings[i]);
    }
    return sets.reduce((r, s) => r + +(s.size === 3), 0);
}
