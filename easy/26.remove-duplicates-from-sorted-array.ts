// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(nums: number[]): number {
    let prev = nums[0], L = 1;
    for (let R = 1; R < nums.length; R++, L++) {
        while (nums[R] === prev) {
            if (++R === nums.length) return L;
        }
        prev = nums[L] = nums[R];
    }
    return L;
}
