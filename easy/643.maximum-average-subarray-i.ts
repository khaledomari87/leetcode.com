// https://leetcode.com/problems/maximum-average-subarray-i/solutions/5926732/simple-and-most-efficient/

function findMaxAverage(nums: number[], k: number): number {
    let maxAvg = 0;
    for (let i = 0; i < k; i++) {
        maxAvg += nums[i];
    }
    maxAvg = maxAvg / k;
    let L = 1;
    let prevAvg = maxAvg;
    while (L + k <= nums.length) {
        prevAvg = (prevAvg * k - nums[L - 1] + nums[L + k - 1]) / k;
        maxAvg = Math.max(
            maxAvg,
            prevAvg,
        );
        L++;
    }
    return maxAvg;
}
