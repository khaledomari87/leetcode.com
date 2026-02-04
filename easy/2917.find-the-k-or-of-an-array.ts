// https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/7552914/constant-space-bit-manipulation-masking/

function findKOr(nums: number[], k: number) {
    const m = nums.reduce((a, b) => Math.max(a, b));
    let res = 0;
    for (let mask = 1; mask <= m; mask *= 2) {
        if (nums.reduce((c, n) => c + +((n & mask) > 0), 0) >= k) {
            res |= mask;
        }
    }
    return res;
}
