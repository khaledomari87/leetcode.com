// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/7411029/short-clean-with-explanation/

// deno-fmt-ignore
const minimumSum = (num: number) => `${num}`.split('').sort()
    .reduce((res, num, i) => res + 10 ** +!(i >> 1) * +num, 0);
