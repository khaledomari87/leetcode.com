// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/6700393/one-line-two-approaches/

const findNumbers = (nums: number[]) =>
    nums.reduce((cnt, num) => cnt + 1 - ((Math.floor(Math.log10(num)) + 1) & 1), 0);

const findNumbersStr = (nums: number[]) =>
    nums.reduce((cnt, num) => cnt + 1 - (num.toString().length & 1), 0);
