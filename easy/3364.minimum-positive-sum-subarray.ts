// https://leetcode.com/problems/minimum-positive-sum-subarray/solutions/7481193/dumb-on2-constant-space/

function minimumSumSubarray(nums: number[], l: number, r: number) {
    let res = Infinity;
    for (let i = 0, n = nums.length, min = Math.min; i < n; i++) {
        for (let j = i, s = nums[j]; j < n; j++, s += nums[j]) {
            if (s > 0 && l <= j - i + 1 && j - i + 1 <= r) {
                res = min(res, s);
            }
        }
    }
    return isFinite(res) ? res : -1;
}
