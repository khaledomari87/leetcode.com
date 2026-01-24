// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/7519775/sorting-greedy/

function minPairSum(nums: number[]) {
    const n = nums.sort((a, b) => a - b).length;
    let res = -Infinity;
    for (let i = 0, max = Math.max; i < n / 2; i++) {
        res = max(res, nums[i] + nums[n - i - 1]);
    }
    return res;
}
