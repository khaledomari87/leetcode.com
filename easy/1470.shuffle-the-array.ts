// https://leetcode.com/problems/shuffle-the-array/solutions/6953057/one-line-no-bs/

// deno-fmt-ignore
const shuffle = (nums: number[], n: number) =>
    nums.map((_, i, a) => a[(i >> 1) + n * (i & 1)]);
