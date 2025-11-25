// https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/7372744/traversal/

function smallestRepunitDivByK(k: number) {
    for (let i = 1, r = 0; i <= k; i++) {
        r = (r * 10 + 1) % k;
        if (!r) return i;
    }
    return -1;
}

function smallestRepunitDivByKBigInt(k: number) {
    if (k % 2 == 0 || k % 5 == 0) return -1;
    const kn = BigInt(k), end = BigInt('1'.repeat(1e5));
    for (let i = 1n; i <= end; i = i * 10n + 1n) {
        if (i % kn === 0n) return String(i).length;
    }
    return -1;
}
