// https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/7144443/optimal-solution/

function minimumCost(nums: number[]) {
    let min1 = Infinity, min2 = min1;
    for (let min = Math.min, i = 1, n = nums.length; i < n; i++) {
        if (nums[i] < min2) min1 = min2, min2 = nums[i];
        else if (nums[i] < min1) min1 = nums[i];
    }
    return nums[0] + min1 + min2;
}
