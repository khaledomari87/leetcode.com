// https://leetcode.com/problems/construct-the-minimum-bitwise-array-ii/solutions/7512165/one-line/

const minBitwiseArray = (nums: number[]) => nums.map((v) => v === 2 ? -1 : ((-v - 2) ^ v) / 4 + v);
