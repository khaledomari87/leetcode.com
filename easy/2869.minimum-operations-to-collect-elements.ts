// https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/7506544/linear-solution-hash-set/

function minOperations(nums: number[], k: number) {
    let i = nums.length - 1;
    for (const s = new Set<number>(); s.size < k; i--) {
        if (nums[i] <= k) s.add(nums[i]);
    }
    return nums.length - i - 1;
}
