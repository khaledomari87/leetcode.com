// https://leetcode.com/problems/find-the-losers-of-the-circular-game/solutions/8097596/hash-set/

function circularGameLosers(n: number, k: number) {
    const seen = new Set<number>();
    for (let i = 1, curr = 1; !seen.has(curr); i++) {
        seen.add(curr);
        curr = 1 + (curr - 1 + k * i) % n;
    }
    const res: number[] = [];
    for (let i = 1; i <= n; i++) {
        if (!seen.has(i)) res.push(i);
    }
    return res;
}
