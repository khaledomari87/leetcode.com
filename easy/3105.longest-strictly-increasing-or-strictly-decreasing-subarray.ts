// https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/solutions/6365806/single-iteration/

function longestMonotonicSubarray(nums: number[]) {
    let maximum = 1;
    for (let i = 1, decr = 1, incr = 1; i < nums.length; i++) {
        nums[i - 1] > nums[i] ? decr++ : decr = 1;
        nums[i - 1] < nums[i] ? incr++ : incr = 1;
        maximum = Math.max(maximum, decr, incr);
    }
    return maximum;
}
