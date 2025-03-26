// https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/6581227/sorting/

function minMoves2(nums: number[]) {
    nums.sort((a, b) => a - b);
    const median = nums[nums.length >>> 1];
    return nums.reduce((r, v) => r + Math.abs(median - v), 0);
}
