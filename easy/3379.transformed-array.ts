// https://leetcode.com/problems/transformed-array/solutions/7395939/one-line/

const constructTransformedArray = (nums: number[]) => nums.map((n, i) => nums.at((n + i) % nums.length)!);
