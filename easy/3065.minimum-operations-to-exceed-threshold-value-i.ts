// https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/6206843/optimum-solution-one-line/

const minOperations = (nums: number[], k: number) => nums.reduce((c, n) => c + +(n < k), 0);
