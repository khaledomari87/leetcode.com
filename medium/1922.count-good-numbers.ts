// https://leetcode.com/problems/count-good-numbers/solutions/6645960/clean-solution/

const countGoodNumbers = (n: number, mod = 1_000_000_007n) =>
    Number([[5n, BigInt(n + 1) / 2n], [4n, BigInt(n) / 2n]]
        .reduce((res, [base, exponent]) => {
            while (exponent > 0n) {
                exponent & 1n && (res = (res * base) % mod);
                base = (base ** 2n) % mod, exponent /= 2n;
            }
            return res;
        }, 1n));
