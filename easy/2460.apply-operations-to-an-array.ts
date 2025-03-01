// https://leetcode.com/problems/apply-operations-to-an-array/solutions/6480289/two-approaches/

function applyOperationsFilter(nums: number[]) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] <<= 1;
            nums[i + 1] = 0;
        }
    }
    const res = nums.filter((x) => x);
    return res.concat(new Array<number>(nums.length - res.length).fill(0));
}

function applyOperations(nums: number[]): number[] {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] <<= 1;
            nums[i + 1] = 0;
        }
    }
    for (let l = 0, r = 0; r < nums.length; r++) {
        if (nums[r]) [nums[l++], nums[r]] = [nums[r], nums[l]];
    }
    return nums;
}
