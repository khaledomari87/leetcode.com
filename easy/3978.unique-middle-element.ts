// https://leetcode.com/problems/unique-middle-element/solutions/8386368/constant-space/

function isMiddleElementUnique(nums: number[]) {
    const m = nums[nums.length >> 1];
    return nums.reduce((r, v) => r + +(v === m), 0) === 1;
}
