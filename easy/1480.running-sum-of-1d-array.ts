// https://leetcode.com/problems/running-sum-of-1d-array/solutions/6954567/prefix-sum/

function runningSum(nums: number[]) {
    for (let i = 1, n = nums.length; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
}
