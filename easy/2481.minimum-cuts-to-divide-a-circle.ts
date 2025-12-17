// https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/7420034/one-line/

const numberOfCuts = (n: number) => n === 1 ? 0 : n >> 1 - n % 2;
