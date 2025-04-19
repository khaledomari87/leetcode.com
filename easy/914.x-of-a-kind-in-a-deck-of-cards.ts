// https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/6666850/greatest-common-divisor/

function hasGroupsSizeX(deck: number[]) {
    const gcd = (x: number, y: number): number => x === 0 ? y : gcd(y % x, x);
    const map = deck.reduce((m, num) => m.set(num, (m.get(num) || 0) + 1), new Map<number, number>());
    const counts = Array.from(map.values()), c = counts.length;
    let x = counts[0], i = 1;
    while (i < c) x = gcd(x, counts[i++]);
    return x >= 2;
}
