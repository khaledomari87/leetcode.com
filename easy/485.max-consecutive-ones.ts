// https://leetcode.com/problems/max-consecutive-ones/solutions/6300296/one-line/

const findMaxConsecutiveOnes = (nums: number[]) =>
    nums.reduce(([r, c], n) => [Math.max(r, n ? ++c : c = 0), c], [0, 0])[0];
