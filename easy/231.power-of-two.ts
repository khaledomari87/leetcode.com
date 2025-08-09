// https://leetcode.com/problems/power-of-two/solutions/6273557/one-liner-constant-time/

const isPowerOfTwo = (n: number) => Math.log2(n) % 1 === 0;

function isPowerOfTwoTraversal(n: number) {
    if (n < 1) return false;
    while (n > 1) {
        if ((n /= 2) % 1 !== 0) return false;
    }
    return true;
}
