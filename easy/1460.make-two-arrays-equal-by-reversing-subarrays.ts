// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/solutions/6950895/one-line/

const canBeEqual = (target: number[], arr: number[]) =>
    target.sort((a, b) => a - b) &&
    arr.sort((a, b) => a - b).every((n, i) => n === target[i]);
