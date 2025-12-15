// https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/7415934/counting/

// deno-fmt-ignore
const intersection = (nums: number[][]) =>
    nums.reduce(
        (c, a) => a.reduce((c, n) => (c[n]++, c), c),
        Array.from({ length: 1001 }, () => 0),
    )                                          // count number of occurrences
        .map((cnt, num) => [cnt, num])         // map to [occurrences, number]
        .filter(([c, _]) => c === nums.length) // keep numbers that occur in all arrays
        .map(([, n]) => n)                     // map to numbers only (sorted)
;
