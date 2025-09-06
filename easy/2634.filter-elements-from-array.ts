// https://leetcode.com/problems/filter-elements-from-array/solutions/7160802/array-reduce/

// deno-lint-ignore no-explicit-any
const filter = (arr: number[], fn: (n: number, i: number) => any) =>
    arr.reduce(
        (res, n, i) => (fn(n, i) && res.push(n), res),
        [] as number[],
    );
