// https://leetcode.com/problems/maximum-erasure-value/solutions/6988412/two-pointers/

function maximumUniqueSubarray(nums: number[]) {
    const set = new Set([nums[0]]), n = nums.length;
    let res = nums[0], sum = res;
    for (let l = 0, r = 1; r < n; r++) {
        while (set.has(nums[r])) {
            set.delete(nums[l]);
            sum -= nums[l++];
        }
        set.add(nums[r]);
        res = Math.max(res, sum += nums[r]);
    }
    return res;
}
