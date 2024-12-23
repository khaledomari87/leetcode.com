// https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6178591/the-simplest-solution-5ms/

function minimumOperations(nums: number[]): number {
    const set = new Set<typeof nums[number]>();
    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.has(nums[i])) return Math.ceil((i + 1) / 3);
        set.add(nums[i]);
    }
    return 0;
}

function minimumOperationBF(nums: number[]): number {
    let slice = nums.slice(0);
    while (new Set(slice).size !== slice.length) {
        slice = slice.slice(3);
    }
    return Math.ceil((nums.length - slice.length) / 3);
}
