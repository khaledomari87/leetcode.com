// https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/7367882/one-line/

const arraySign = (nums: number[]) => nums.reduce((r, n) => Math.sign(r * n), 1);
