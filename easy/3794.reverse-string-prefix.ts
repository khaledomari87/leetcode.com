// https://leetcode.com/problems/reverse-string-prefix/solutions/7609002/one-line/

const reversePrefix = (s: string, k: number) =>
    `${[...s.substring(0, k)].reverse().join('')}${s.substring(k)}`;
