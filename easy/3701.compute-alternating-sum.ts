// https://leetcode.com/problems/compute-alternating-sum/solutions/7387750/one-line/

const alternatingSum = (nums: number[]) => nums.reduce((r, n, i) => r + +(i % 2 ? n : -n), 0);
