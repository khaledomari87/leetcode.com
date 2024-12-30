// https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/6201139/one-liner/

const minElement = (nums: number[]): number =>
    nums.reduce(
        (min, num) => Math.min(min, num.toString().split('').reduce((p, c) => p + +c, 0)),
        Number.POSITIVE_INFINITY,
    );
