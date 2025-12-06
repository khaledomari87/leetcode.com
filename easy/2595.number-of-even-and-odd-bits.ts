// https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/7396492/bit-manipulation/

function evenOddBit(n: number) {
    const res = [0, 0];
    for (let i = 0; n; i++, n >>= 1) {
        res[i % 2] += n % 2;
    }
    return res;
}
