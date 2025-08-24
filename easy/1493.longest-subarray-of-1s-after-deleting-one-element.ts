// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/solutions/7115202/clean-ts-js/

function longestSubarray(nums: (1 | 0)[], allowance = 1) {
    let l = 0, zeros = 0;
    return nums.reduce((res, num, r) => {
        zeros += +!num;
        while (zeros > allowance) zeros -= +!nums[l++];
        return Math.max(res, r - l);
    }, 0 as number);
}
