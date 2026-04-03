// https://leetcode.com/problems/check-if-array-is-good/solutions/7760590/clean-linear/

function isGood(nums: number[]) {
    const n = nums.length - 1;
    for (let s = new Set(nums), i = 1; i < n; i++) {
        if (!s.has(i)) return false;
    }
    return nums.indexOf(n) !== nums.lastIndexOf(n);
}
