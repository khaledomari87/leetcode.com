// https://leetcode.com/problems/apply-transform-over-each-element-in-array/solutions/7160785/array-reduce/

const map = (arr: number[], fn: (n: number, i: number) => number) =>
    arr.reduce(
        (res, n, i) => (res[i] = fn(n, i), res),
        new Array(arr.length) as number[],
    );
