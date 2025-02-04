// https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/6375796/single-iteration-optimal-solution/

function findLengthOfLCIS(nums: number[]) {
    let res = 1;
    for (let i = 1, count = res; i < nums.length; i++) {
        count = nums[i - 1] < nums[i] ? count + 1 : 1;
        res = Math.max(res, count);
    }
    return res;
}
