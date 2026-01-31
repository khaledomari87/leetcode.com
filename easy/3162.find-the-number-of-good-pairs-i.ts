// https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/7538894/on-m/

const numberOfPairs = (nums1: number[], nums2: number[], k: number) =>
    nums1.reduce((r, x) => r + nums2.reduce((c, y) => c + +!(x % (y * k)), 0), 0);
