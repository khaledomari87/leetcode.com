// https://leetcode.com/problems/smallest-range-i/solutions/6647459/one-liner/

const smallestRangeI = (nums: number[], k: number) =>
    Math.max(0, Math.max(...nums) - Math.min(...nums) - 2 * k);
