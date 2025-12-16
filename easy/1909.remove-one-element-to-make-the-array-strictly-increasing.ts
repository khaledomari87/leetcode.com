// https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/7418209/clean-linear-solution/

function canBeIncreasing(nums: number[], k = 1) {
    for (let i = 1, prev = nums[0], n = nums.length; i < n && k >= 0; i++) {
        k -= +(nums[i] <= prev);
        prev = nums[i - +(i > 1 && nums[i] <= prev && nums[i - 2] >= nums[i])];
    }
    return k >= 0;
}
