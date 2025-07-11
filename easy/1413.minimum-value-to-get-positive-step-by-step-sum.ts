// https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/6945721/one-line/

// deno-fmt-ignore
const minStartValue = (nums: number[], sum = 0) => 1 -
    nums.reduce((min, num) => Math.min(min, sum += num), 0);
