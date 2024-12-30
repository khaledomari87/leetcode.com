// https://leetcode.com/problems/count-ways-to-build-good-strings/solutions/6204468/two-solutions-backtracking-and-dynamic-programming/

function countGoodStrings(low: number, high: number, zero: number, one: number): number {
    const dp = new Array<number>(high + 1);
    dp[0] = 1;
    const mod = 10 ** 9 + 7;
    for (let i = 1; i <= high; i++) {
        dp[i] = ((dp[i - zero] || 0) + (dp[i - one] || 0)) % mod;
    }

    let output = 0;
    for (let i = low; i <= high; i++) {
        output = (output + dp[i]) % mod;
    }
    return output;
}

function countGoodStringsRBT(low: number, high: number, zero: number, one: number): number {
    const cache = new Array<number>(10 ** 5);
    const rbt = (strLen: number) => {
        if (strLen > high) return 0;
        if (cache[strLen] !== undefined) return cache[strLen];
        cache[strLen] = +(strLen >= low);
        cache[strLen] += rbt(strLen + zero) + rbt(strLen + one);
        return cache[strLen] % (10 ** 9 + 7);
    };
    return rbt(0);
}
