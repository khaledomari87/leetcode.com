// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-iii/solutions/7419695/one-line/

const minMoves = (nums: number[]) =>
    nums.reduce((a, b) => Math.max(a, b)) * nums.length -
    nums.reduce((a, b) => a + b);
