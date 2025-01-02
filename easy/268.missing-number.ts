// https://leetcode.com/problems/missing-number/

const missingNumber = (nums: number[]) =>
    nums.reduce(
        (total, v) => total - v,
        nums.length * (nums.length + 1) / 2,
    );
