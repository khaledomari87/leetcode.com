// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/6697439/two-pointers/

function countSubarrays(nums: number[], k: number) {
    const max = nums.reduce((a, b) => Math.max(a, b)), n = nums.length;
    let L = 0, cnt = 0;
    return nums.reduce((res, numR, R) => {
        cnt += +(numR === max);
        while (cnt >= k) cnt -= +(nums[L++] === max), res += n - R;
        return res;
    }, 0);
}
