// https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/solutions/7448745/greedy-prefix-index-constant-space/

function findIndices(nums: number[], indexDiff: number, valueDiff: number) {
    let mn = 0, mx = 0;
    for (let i = indexDiff, n = nums.length; i < n; i++) {
        if (nums[i - indexDiff] < nums[mn]) mn = i - indexDiff;
        if (nums[i - indexDiff] > nums[mx]) mx = i - indexDiff;
        if (nums[i] - nums[mn] >= valueDiff) return [mn, i];
        if (nums[mx] - nums[i] >= valueDiff) return [mx, i];
    }
    return [-1, -1];
}
