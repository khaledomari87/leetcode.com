// https://leetcode.com/problems/largest-perimeter-triangle/solutions/6777676/sort-greedy/

function largestPerimeter(nums: number[]) {
    for (let i = 2, n = nums.sort((a, b) => b - a).length; i < n; i++) {
        if (nums[i - 2] < nums[i - 1] + nums[i]) {
            return nums[i - 2] + nums[i - 1] + nums[i];
        }
    }
    return 0;
}
