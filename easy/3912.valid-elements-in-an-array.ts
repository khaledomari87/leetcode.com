// https://leetcode.com/problems/valid-elements-in-an-array/solutions/8114732/linear-solution-hash-set/

function findValidElements(nums: number[]) {
    const n = nums.length, res = new Set<number>();
    for (let l = -Infinity, r = l, i = 0; i < n; i++) {
        if (nums[i] > l) res.add(i);
        if (nums[n - i - 1] > r) res.add(n - i - 1);
        l = Math.max(l, nums[i]);
        r = Math.max(r, nums[n - i - 1]);
    }
    return nums.filter((_, i) => res.has(i));
}
