// https://leetcode.com/problems/minimum-number-of-flips-to-reverse-binary-string/solutions/7367846/one-line/

const minimumFlips = (n: number, b = n.toString(2)) =>
    b.split('').reverse().reduce((r, v, i) => r + +(v !== b[i]), 0);
