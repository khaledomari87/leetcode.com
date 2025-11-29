// https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/7381211/one-line-linear-om-n/

const findDifference = (a: number[], b: number[]) =>
        [a, b].map((a) => new Set(a)).map((s, i, a) => [...s].filter((v) => !a[+!i].has(v)));
