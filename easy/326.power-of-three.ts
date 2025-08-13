// https://leetcode.com/problems/power-of-three/solutions/6275060/constant-time-and-space-one-liner/

const isPowerOfThree = (n: number) => (Math.log10(n) / Math.log10(3)) % 1 === 0;

function isPowerOfThreeIterator(n: number) {
    if (n < 1) return false;
    while (n > 1) {
        if ((n /= 3) % 1 !== 0) return false;
    }
    return true;
}
