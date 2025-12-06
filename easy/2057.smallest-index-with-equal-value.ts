// https://leetcode.com/problems/smallest-index-with-equal-value/solutions/7396637/one-line/

const smallestEqual = (a: number[]) => a.findIndex((n, i) => i % 10 === n);
