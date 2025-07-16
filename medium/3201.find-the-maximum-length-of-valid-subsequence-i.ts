// https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/6964592/one-line/

// deno-fmt-ignore
const maximumLength = (nums: number[]) => [[0, 1], [1, 0], [0, 0], [1, 1]]
    .reduce((res, pattern) => Math.max(res, nums.reduce((cnt, num) =>
        cnt + +(num % 2 === pattern[cnt % 2]), 0)), 0);
