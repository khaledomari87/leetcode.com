// https://leetcode.com/problems/missing-number/solutions/6220369/most-efficient-solution/

const missingNumber = (nums: number[]) =>
    nums.reduce(
        (total, v) => total - v,
        nums.length * (nums.length + 1) / 2,
    );
