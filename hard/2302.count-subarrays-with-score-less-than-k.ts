// https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/6694531/sliding-window/

function countSubarrays(nums: number[], k: number) {
    let L = 0, sum = 0;
    return nums.reduce((res, numR, R) => {
        sum += numR;
        while (L <= R && k <= sum * (R - L + 1)) sum -= nums[L++];
        return res + R - L + 1;
    }, 0);
}
