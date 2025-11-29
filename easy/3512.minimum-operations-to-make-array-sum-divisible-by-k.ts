// https://leetcode.com/problems/minimum-operations-to-make-array-sum-divisible-by-k/solutions/7380552/one-line/

const minOperations = (nums: number[], k: number) => nums.reduce((a, b) => a + b) % k;
