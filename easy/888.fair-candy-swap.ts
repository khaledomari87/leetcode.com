// https://leetcode.com/problems/fair-candy-swap/solutions/6626841/two-approaches/

function fairCandySwap(M: number[], N: number[]): [number, number] {
    const diff = (M.reduce((a, b) => a + b) - N.reduce((a, b) => a + b)) / 2;
    for (const m of M) {
        for (const n of N) {
            if (m - n === diff) return [m, n];
        }
    }
    throw new Error('Invalid Input!');
}

function fairCandySwap2(M: number[], N: number[]): [number, number] {
    const diff = (M.reduce((a, b) => a + b) - N.reduce((a, b) => a + b)) / 2;
    const set = new Set(M);
    for (const b of new Set(N)) {
        if (set.has(diff + b)) return [diff + b, b];
    }
    throw new Error('Invalid Input!');
}
