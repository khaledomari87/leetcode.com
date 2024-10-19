// https://leetcode.com/problems/minimum-size-subarray-sum/

function minSubArrayLen(target: number, nums: number[]): number {
    let output = Number.POSITIVE_INFINITY;
    let sum = 0;
    for (let L = 0, R = 0; R < nums.length; R++) {
        sum += nums[R];
        while(sum >= target) {
            output = Math.min(output, R - L + 1);
            sum -= nums[L++];
        }
    }
    return Number.isSafeInteger(output) ? output : 0;
};
