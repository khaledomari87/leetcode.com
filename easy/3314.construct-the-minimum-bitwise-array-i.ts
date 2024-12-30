// https://leetcode.com/problems/construct-the-minimum-bitwise-array-i/solutions/6206832/one-liner/

const minBitwiseArray = (nums: number[]) => nums.map((v) => v === 2 ? -1 : (((-v - 2) ^ v) / 4) + v);
