// https://leetcode.com/problems/power-of-three/solutions/6275060/constant-time-and-space-one-liner/

const isPowerOfThree = (n: number) => (Math.log10(n) / Math.log10(3)) % 1 === 0;
