// https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/6201114/hash-set/

function getSneakyNumbers(nums: number[]): number[] {
    for (let i = 0, first: number | undefined, seen = new Set<number>(); i < nums.length; i++) {
        if (seen.has(nums[i])) {
            if (first !== undefined) return [first, nums[i]];
            first = nums[i];
        } else {
            seen.add(nums[i]);
        }
    }
    throw new Error('Invalid input!');
}
