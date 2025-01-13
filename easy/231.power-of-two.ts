// https://leetcode.com/problems/power-of-two/solutions/6273557/one-liner-without-loops/

const isPowerOfTwo = (n: number) => Math.log2(n) % 1 === 0;
