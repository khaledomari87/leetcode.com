// https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/7871154/hash-set/

function findSubarrays(nums: number[]) {
    for (let s = new Set<number>(), n = nums.length, i = 1; i < n; i++) {
        if (s.has(nums[i - 1] + nums[i])) return true;
        s.add(nums[i - 1] + nums[i]);
    }
    return false;
}
