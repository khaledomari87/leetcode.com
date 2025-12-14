// https://leetcode.com/problems/minimum-distance-to-the-target-element/solutions/7413116/one-line/

const getMinDistance = (nums: number[], target: number, start: number) =>
    nums.reduce((r, n, i) => n === target ? Math.min(r, Math.abs(i - start)) : r, Infinity);
