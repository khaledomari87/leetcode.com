// https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/7396518/clean/

// deno-fmt-ignore
const areNumbersAscending = (s: string) => s
    .split(' ')
    .filter((v) => !isNaN(+v))
    .map((v) => +v)
    .every((n, i, a) => !i || a[i - 1] < n);
