// https://leetcode.com/problems/left-and-right-sum-differences/solutions/7419664/constant-space/

function leftRightDifference(nums: number[]) {
    let left = 0, right = nums.reduce((a, b) => a + b);
    return Array.from({ length: nums.length }, (_, i) => {
        right -= nums[i];
        const diff = Math.abs(left - right);
        left += nums[i];
        return diff;
    });
}
