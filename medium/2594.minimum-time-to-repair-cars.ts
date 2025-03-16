// https://leetcode.com/problems/minimum-time-to-repair-cars/solutions/6540926/clean-binary-search/

function repairCars(ranks: number[], cars: number) {
    let L = 1;
    for (let R = ranks[0] * cars ** 2, { floor, sqrt } = Math; L < R;) {
        const M = Math.floor((L + R) / 2);
        ranks.reduce((a, b) => a + floor(sqrt(M / b)), 0) < cars ? L = M + 1 : R = M;
    }
    return L;
}
