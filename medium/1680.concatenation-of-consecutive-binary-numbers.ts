// https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/solutions/7614749/bigint-string/

function concatenatedBinary(n: number) {
    const res: string[] = [], MOD = BigInt(1e9 + 7);
    for (let i = 1; i <= n; i++) res.push(i.toString(2));

    return Number(BigInt(`0b${res.join('')}`) % MOD);
}
