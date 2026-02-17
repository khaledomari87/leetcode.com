// https://leetcode.com/problems/toggle-light-bulbs/solutions/7586203/hash-map-by-khaled-alomari-t0uq/

function toggleLightBulbs(bulbs: number[]) {
    const f = bulbs.reduce(
        (m, n) => m.set(n, (m.get(n) || 0) + 1),
        new Map<number, number>(),
    );
    return [...f].filter(([, f]) => f % 2).map(([n]) => n)
        .sort((a, b) => a - b);
}
