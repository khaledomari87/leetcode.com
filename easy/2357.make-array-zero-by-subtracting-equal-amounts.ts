// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/7497682/linear-time-no-sorting-one-line/

const minimumOperations = (nums: number[]) => [...new Set(nums.filter((n) => n))].length;
