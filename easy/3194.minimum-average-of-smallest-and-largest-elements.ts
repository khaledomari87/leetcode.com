// https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/6196348/left-and-right-pointers-after-sorting/

function minimumAverage(nums: number[]): number {
    let minAvg = Number.POSITIVE_INFINITY;
    let L = 0, R = nums.sort((a, b) => a - b).length - 1;
    while (L < R) minAvg = Math.min(minAvg, (nums[L++] + nums[R--]) / 2);
    return minAvg;
}
