// https://leetcode.com/problems/minimum-operations-to-equalize-array/solutions/7228410/one-line/

const minOperations = (nums: number[]) => +(new Set(nums).size > 1);
