// https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/solutions/6468680/kadane-s-algorithm/

function maxAbsoluteSum(nums: number[]) {
    let maxRes = nums[0], minRes = nums[0];
    for (let i = 1, ending = nums[0]; i < nums.length; i++) {
        ending = Math.max(ending + nums[i], nums[i]);
        maxRes = Math.max(maxRes, ending);
    }
    for (let i = 1, ending = nums[0]; i < nums.length; i++) {
        ending = Math.min(ending + nums[i], nums[i]);
        minRes = Math.min(minRes, ending);
    }
    return Math.max(Math.abs(minRes), maxRes);
}
