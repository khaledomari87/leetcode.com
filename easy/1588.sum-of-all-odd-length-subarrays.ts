// https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/7237010/linear-solution/

const sumOddLengthSubarrays = (a: number[]) =>
    a.reduce(
        (res, n, l) =>
            res + n * ((l >> 1) + 1) * ((a.length - l - 1 >> 1) + 1) +
            n * ((l + 1) >> 1) * ((a.length - l - 1 + 1) >> 1),
        0,
    );
