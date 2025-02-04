// https://leetcode.com/problems/maximum-ascending-subarray-sum/solutions/6372414/single-iteration-optimal-solution/

function maxAscendingSum(nums: number[]) {
    let res = nums[0];
    for (let i = 1, sum = res; i < nums.length; i++) {
        sum = nums[i] + (nums[i - 1] < nums[i] ? sum : 0);
        res = Math.max(res, sum);
    }
    return res;
}
