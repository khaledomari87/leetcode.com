// https://leetcode.com/problems/number-complement/solutions/6297603/constant-time-and-space-one-liner/

const findComplement = (n: number) => n ^ (2 ** (Math.floor(Math.log2(n)) + 1) - 1);
