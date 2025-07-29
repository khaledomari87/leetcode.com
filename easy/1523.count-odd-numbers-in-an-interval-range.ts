// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/7020339/constant-time/

const countOdds = (low: number, high: number) => (high + 1 >> 1) - (low >> 1);
