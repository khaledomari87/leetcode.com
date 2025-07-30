// https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/solutions/7022994/clean-two-pointers/

function longestSubarray(nums: number[]) {
    const n = nums.length;
    const max = nums.reduce((a, b) => Math.max(a, b));
    let res = 0;
    for (let l = nums.indexOf(max), r = l; r < n; r++) {
        if (nums[r] === max) res = Math.max(res, r - l + 1);
        else l = r + 1;
    }
    return res;
}
