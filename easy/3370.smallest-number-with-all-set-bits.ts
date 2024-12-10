// https://leetcode.com/problems/smallest-number-with-all-set-bits/solutions/6133694/one-line/

const smallestNumber = (n: number): number =>
    n | parseInt(new Array(Math.ceil(Math.log2(n))).fill(1).join(''), 2);
