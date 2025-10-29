// https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/7310251/one-line/

const smallestNumber = (n: number) => parseInt('1'.repeat(n.toString(2).length), 2);
