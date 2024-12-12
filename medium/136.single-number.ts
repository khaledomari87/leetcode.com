// https://leetcode.com/problems/single-number/solutions/6140433/one-line-optimum-solution/

const singleNumber = (nums: number[]): number => nums.reduce((p, c) => p ^ c);
