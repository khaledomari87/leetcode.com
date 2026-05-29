// https://leetcode.com/problems/best-poker-hand/solutions/8300153/clean/

function bestHand(ranks: number[], suits: string[]) {
    if (suits.every((v) => v == suits[0])) return 'Flush';
    const m = Math.max(
        ...ranks.reduce(
            (m, v) => m.set(v, (m.get(v) || 0) + 1),
            new Map(),
        ).values(),
    );
    if (m > 2) return 'Three of a Kind';
    if (m > 1) return 'Pair';
    return 'High Card';
}
