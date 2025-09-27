// https://leetcode.com/problems/bitwise-or-of-even-numbers-in-an-array/description/

// deno-fmt-ignore
const evenNumberBitwiseORs = (nums: number[]) =>
    nums.reduce((res, num) => res | num * +!(num & 1), 0);
