// https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/7331472/one-line/

const addedInteger = (a: number[], b: number[]) => Math.min(...b) - Math.min(...a);
