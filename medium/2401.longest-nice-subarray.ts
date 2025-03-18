// https://leetcode.com/problems/longest-nice-subarray/solutions/6550075/optimal-solution-two-pointers/

function longestNiceSubarray(nums: number[]) {
    let res = 0;
    for (let L = 0, R = 0, seen = 0; R < nums.length; R++) {
        // Shrink window and unset left seen bits
        while (seen & nums[R]) seen ^= nums[L++];
        seen |= nums[R]; // set right seen bits
        res = Math.max(res, R - L + 1);
    }
    return res;
}
