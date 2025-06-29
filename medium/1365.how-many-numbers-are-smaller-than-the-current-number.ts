// https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/6900063/clean-elegant-with-explanation/

const smallerNumbersThanCurrent = (nums: number[]) =>
    nums.map((n, i) => [n, i])
        .sort((a, b) => a[0] - b[0]) // sorted array
        .reduce(
            (r, v, i, s) => // r: res, v: value, i: index, s: sorted
            (r[v[1]] = i && v[0] === s[i - 1][0] ? r[s[i - 1][1]] : i, r),
            new Array<number>(nums.length), // res array
        );
