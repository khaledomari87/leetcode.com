// https://leetcode.com/problems/smallest-index-with-digit-sum-equal-to-index/solutions/7434163/one-line-by-khaled-alomari-rkxo/

// deno-fmt-ignore
const smallestIndex = (nums: number[]) => nums.findIndex((v, i) =>
    i === `${v}`.split('').reduce((a, b) => a + +b, 0));
