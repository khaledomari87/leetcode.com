// https://leetcode.com/problems/two-sum/solutions/7544893/one-pass/

function twoSum(nums: number[], target: number) {
    const m = new Map<number, number>();
    for (let i = 0, n = nums.length; i < n; i++) {
        const item = m.get(target - nums[i]);
        if (item !== undefined) return [i, item];
        m.set(nums[i], i);
    }
    return [];
}
