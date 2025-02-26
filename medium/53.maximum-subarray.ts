// https://leetcode.com/problems/maximum-subarray/solutions/6468711/kadanes-algorithm/

function maxSubArray(nums: number[]) {
    let res = nums[0];
    for (let i = 1, ending = nums[0]; i < nums.length; i++) {
        ending = Math.max(ending + nums[i], nums[i]);
        res = Math.max(res, ending);
    }
    return res;
}
