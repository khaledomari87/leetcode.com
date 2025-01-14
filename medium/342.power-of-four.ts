// https://leetcode.com/problems/power-of-four/solutions/6279356/one-liner-constant-time-and-space/

const isPowerOfFour = (n: number) => Math.log2(n) / 2 % 1 === 0;
