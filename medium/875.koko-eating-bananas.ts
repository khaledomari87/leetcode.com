// https://leetcode.com/problems/koko-eating-bananas/

function minEatingSpeed(piles: number[], h: number): number {
    let minK = piles.reduce((prev, curr) => Math.max(prev, curr), Number.NEGATIVE_INFINITY), // max pile
        L = 0,
        R = minK;
    while (L <= R) {
        const M = Math.floor((L + R) / 2);
        let K = 0;
        for (let i = 0; i < piles.length && K <= h; i++) {
            K += Math.ceil(piles[i] / M);
        }
        if (K <= h) {
            minK = Math.min(minK, M);
            R = M - 1;
        } else {
            L = M + 1;
        }
    }
    return minK;
}
