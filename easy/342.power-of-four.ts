// https://leetcode.com/problems/power-of-four/solutions/6279356/one-liner-constant-time-and-space/

const isPowerOfFour = (n: number) => Math.log2(n) / 2 % 1 === 0;

function isPowerOfFourIterator(n: number) {
    if (n < 1) return false;
    while (n > 1) {
        if ((n /= 4) % 1 !== 0) return false;
    }
    return true;
}
