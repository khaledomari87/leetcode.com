// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
    let L = 1;
    for (let R = 1; R < nums.length; R++, L++) {
        while (nums[R] === nums[L - 1]) {
            if (++R === nums.length) return L;
        }
        nums[L] = nums[R];
    }
    return L;
}
