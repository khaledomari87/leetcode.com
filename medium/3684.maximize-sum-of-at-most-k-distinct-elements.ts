// https://leetcode.com/problems/maximize-sum-of-at-most-k-distinct-elements/solutions/7228133/one-line/

const maxKDistinct = (n: number[], k: number) => [...new Set(n)].sort((a, b) => b - a).slice(0, k);
