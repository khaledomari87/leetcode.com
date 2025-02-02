// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/solutions/6360991/optimal-solution-with-one-traversal/

function check(nums: number[]) {
    for (let i = 1, pivot = false; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            if (pivot || nums[0] < nums.at(-1)!) return false;
            pivot = true;
        }
    }
    return true;
}
