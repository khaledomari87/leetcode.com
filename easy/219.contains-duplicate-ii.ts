// https://leetcode.com/problems/contains-duplicate-ii/solutions/6270113/linear-solution/

function containsNearbyDuplicate(nums: number[], k: number) {
    const seen = new Set<number>(); // only store the last k elements
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) return true;
        seen.add(nums[i]);
        if (seen.size > k) seen.delete(nums[i - k]);
    }
    return false;
}
