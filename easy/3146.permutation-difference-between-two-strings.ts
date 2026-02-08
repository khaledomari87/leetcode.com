// https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/7561178/one-line/

const findPermutationDifference = (s: string, t: string) =>
    s.split('').reduce((r, c, i) => r + Math.abs(i - t.indexOf(c)), 0);
