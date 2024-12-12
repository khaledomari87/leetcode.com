// https://leetcode.com/problems/move-zeroes/solutions/6140257/simple-two-pointers-solution-4-lines/

function moveZeroes(nums: number[]): void {
    for (let L = 0, R = 1; R < nums.length; R++) {
        while (nums[R] === 0 && R < nums.length - 1) R++;
        while (nums[L] !== 0 && L < R) L++;
        [nums[L], nums[R]] = [nums[R], nums[L]];
    }
}
