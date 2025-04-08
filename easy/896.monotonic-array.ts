// https://leetcode.com/problems/monotonic-array/solutions/6628100/one-liner/

const isMonotonic = (arr: number[], s = arr.at(-1)! >= arr[0] ? 1 : -1) =>
    arr.every((num, i) => i === 0 || s * num >= s * arr[i - 1]);
