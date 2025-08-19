// https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/7098253/one-line/

// deno-fmt-ignore
const countDigits = (num: number) => String(num)
    .split('').reduce((r, d) => r + +!(num % +d), 0);
