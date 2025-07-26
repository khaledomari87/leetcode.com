// https://leetcode.com/problems/number-of-good-pairs/solutions/7008646/one-line/

const numIdenticalPairs = (nums: number[]) =>
    nums.reduce(
        (arr, num) => (arr[num]++, arr),
        new Array<number>(101).fill(0),
    ).reduce((res, c) => res + c * (c - 1) / 2, 0);
