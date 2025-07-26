// https://leetcode.com/problems/maximum-unique-subarray-sum-after-deletion/solutions/7006241/one-line/

const maxSum = (nums: number[]) =>
    [...new Set(nums.filter((num) => num > 0))]
        .reduce((a, b) => a + b, 0) || Math.max(...nums);
