// https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6178591/four-approaches/

function minimumOperations(nums: number[]) {
    let slice = nums.slice(0);
    while (new Set(slice).size !== slice.length) {
        slice = slice.slice(3);
    }
    return Math.ceil((nums.length - slice.length) / 3);
}

function minimumOperations2(nums: number[]) {
    const set = new Set<typeof nums[number]>();
    for (let i = nums.length - 1; i >= 0; set.add(nums[i--])) {
        if (set.has(nums[i])) return Math.ceil((i + 1) / 3);
    }
    return 0;
}

function minimumOperations3(nums: number[]) {
    const seen: boolean[] = new Array(101);
    for (let i = nums.length - 1; i >= 0; seen[nums[i--]] = true) {
        if (seen[nums[i]]) return Math.ceil((i + 1) / 3);
    }
    return 0;
}

const minimumOperations4 = (nums: number[]): number =>
    new Set(nums).size != nums.length ? 1 + minimumOperations4(nums.slice(3)) : 0;
