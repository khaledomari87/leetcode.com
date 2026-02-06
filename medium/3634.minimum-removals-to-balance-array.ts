// https://leetcode.com/problems/minimum-removals-to-balance-array/solutions/7556644/two-pointers/

function minRemoval(nums: number[], k: number) {
    const n = nums.sort((a, b) => a - b).length;
    let longest = 0;
    for (let max = Math.max, l = 0, r = 0; r < n; r++) {
        while (nums[r] > nums[l] * k) l++;
        longest = max(longest, r - l + 1);
    }
    return n - longest;
}
