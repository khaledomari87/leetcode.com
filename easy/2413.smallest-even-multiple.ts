// https://leetcode.com/problems/smallest-even-multiple/solutions/7266734/one-line/

const smallestEvenMultiple = (n: number) => n * (1 + n % 2); // n << n % 2;
