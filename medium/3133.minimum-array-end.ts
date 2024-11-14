// https://leetcode.com/problems/minimum-array-end/solutions/6045581/optimal-solution/

function minEnd(n: number, x: number): number {
    const X = BigInt(x), N = BigInt(n);
    let output = X, i = 1n, j = 1n;
    while (j <= n - 1) {
        if (!(i & X)) {
            j & (N - 1n) && (output |= i);
            j <<= 1n;
        }
        i <<= 1n;
    }
    return Number(output);
}

function minEndBruteForce(n: number, x: number): number {
    const bigX = BigInt(x);
    let output = bigX;
    for (let i = 1; i < n; i++) {
        output = (output + 1n) | bigX;
    }
    return Number(output);
}
